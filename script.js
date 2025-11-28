function loadSubmissions(){
  try{
    return JSON.parse(localStorage.getItem('unisexx_subs') || '[]');
  }catch(e){
    return [];
  }
}

function saveSubmissions(arr){
  localStorage.setItem('unisexx_subs', JSON.stringify(arr));
}

document.getElementById('battleForm').addEventListener('submit', e=>{
  e.preventDefault();

  const mode = document.querySelector('input[name="mode"]:checked').value;
  const guild = document.getElementById('guildName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const msg = document.getElementById('msg');

  if(!guild || !phone){
    msg.innerText = "❗ Заполните все поля!";
    return;
  }

  const arr = loadSubmissions();
  arr.push({ mode, guild, phone, time: new Date().toISOString() });
  saveSubmissions(arr);

  msg.innerText = "✔ Заявка отправлена!";
  document.getElementById('battleForm').reset();

  setTimeout(()=> msg.innerText = "", 3000);
});
