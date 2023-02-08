

const main_video = document.querySelector('iframe');
const video_playlist = document.querySelector('.video__content .list-group');
let video_lesson = [
    {
        'id': '1',
        'title': 'Технологий создания динамических Web-сайтов: HTML, CSS, JavaScript, PHP, MySQL.',
        'src': 'https://www.youtube.com/embed/MNUM29AnPew',
        'duration': '6:49',
    },
    {
        'id': '2',
        'title': 'web 02 css',
        'src': 'https://www.youtube.com/embed/5LQDTMWK6Ao',
        'duration': '8:57',
    },
    {
        'id': '3',
        'title': 'web 03 javascript',
        'src': 'https://www.youtube.com/embed/LZaU7CFoZZY',
        'duration': '8:35',
    },{
        'id': '4',
        'title': 'web 04 server',
        'src': 'https://www.youtube.com/embed/7Xn6s2C1nOA',
        'duration': '6:54',
    },{
        'id': '5',
        'title': 'web 05 php',
        'src': 'https://www.youtube.com/embed/-LpomxfZwTY',
        'duration': '10:00',
    },{
        'id': '6',
        'title': 'web 04 server',
        'src': 'https://www.youtube.com/embed/7Xn6s2C1nOA',
        'duration': '6:54',
    },{
        'id': '7',
        'title': 'web 04 server',
        'src': 'https://www.youtube.com/embed/7Xn6s2C1nOA',
        'duration': '6:54',
    },{
        'id': '8',
        'title': 'web 04 server',
        'src': 'https://www.youtube.com/embed/7Xn6s2C1nOA',
        'duration': '6:54',
    },{
        'id': '9',
        'title': 'web 04 server',
        'src': 'https://www.youtube.com/embed/7Xn6s2C1nOA',
        'duration': '6:54',
    },
    ];
document.querySelector('iframe').src = video_lesson[0]['src'];

video_lesson.forEach((video, i) => {
    let video_element = `    
         <a href="#" class="list-group-item play list-group-item-action " data-id="${video.id}" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1" ><i class="fas fa-play" ></i>  ${video.title}</h6>
      <small class="badge bg-info ">${video.duration}</small>
    </div>
  </a>
      
    `;
    video_playlist.innerHTML += video_element;
})
let videos = document.querySelectorAll('.play');
videos.forEach(select_video=>{
   select_video.onclick = ()=>{
       for(all_videos of videos)
       {
           all_videos .classList.remove('active');
       }
       select_video.classList.add('active');
       let match_video = video_lesson.find(video=>video.id === select_video.dataset.id);
       console.log(match_video);
        main_video.src = match_video.src;
   }
});
