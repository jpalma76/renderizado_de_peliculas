const url= "./movies.json";

fetch(url)
    .then(res => res.json())
    .then(data => renderData(data))

function renderData(data) {
    const fetchData = data;

    console.log(fetchData);

    let template = '';

    fetchData.map((movie)=> {
        template += `
            <div class="card">
                <img src="${'https://image.tmdb.org/t/p/w300'+movie.poster_path}"/>
                <p hidden>${movie.id}</p>
                <h3>${movie.title}</h3>
            </div>
        `;
        document.querySelector('#render').innerHTML = template;
    });
}