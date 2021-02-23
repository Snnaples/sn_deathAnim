
function Delay(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

setTick( async() => {
  await Delay(1000);
  let limit = GetEntityHealth(GetPlayerPed(-1)); 
  if(limit <= 120) { 
    SendNuiMessage(JSON.stringify({
      type : "heart"
    }));
  }
    if(limit > 120) {
      SendNuiMessage(JSON.stringify({
        type : "close-heart"
      }));
    }
  
});
