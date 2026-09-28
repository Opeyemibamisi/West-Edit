export const services=[
  ['01','Video Editing','Shape raw footage into a focused, watchable story.','https://drive.google.com/drive/folders/1noqlZWbmvjHyUOeJ3HV0WEBXayW9EZL2'],
  ['02','Wedding Films','Hold on to the texture, people and feeling of the day.','https://drive.google.com/drive/folders/13ZUpJoljHH61WPB0CN3eMZYqHS6ErPJt?usp=drive_link'],
  ['03','Social Content','Quick cuts made to earn attention and keep momentum.','https://drive.google.com/drive/folders/1A77ynBqUCx4p4XhhnpBgWaUrJqJN_4vO'],
  ['04','Ads Video','Clear, sharp films that make the message land.','https://drive.google.com/drive/folders/1chE0HtR116idJPpRAYP0ELOZwu5NWLCA?usp=drive_link']
]
const thumbnail = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`
export const projects=[
  {title:'Frames of focus',type:'Campaign film',size:'large',videoId:'1gCC_dPefwa2v_ToeHDoXML_-pB6dr9eR'},
  {title:'A story in motion',type:'Wedding film',size:'tall',videoId:'1zYzyfY86QV1N7O7S_WLMDX2uQ9Rq4Cw-'},
  {title:'Cut with intent',type:'Social series',size:'standard',videoId:'1VPYKt6GvJJ06bi0KDgHK6KX2xE9QTJ3b'},
  {title:'The afterglow',type:'Brand editorial',size:'standard',videoId:'1VJAgGZJ0T1_ajlI4q6VN-zAd6htO1UOY'},
  {title:'The long take',type:'Wedding film',size:'large',videoId:'1PPjTPwOFHhATiofd2ewUdup4Ttb-IRAw'},
  {title:'In the frame',type:'Social series',size:'standard',videoId:'1NgUgYXROqv5aGY474yNpkG4gobfrVV4j'}
].map(project => ({ ...project, image: thumbnail(project.videoId) }))
