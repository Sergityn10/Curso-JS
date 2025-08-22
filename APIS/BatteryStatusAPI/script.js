navigator.getBattery().then(function(battery) {
  console.log(battery.level);
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    console.log(this.level);
  };
});

