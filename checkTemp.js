function checkTemp(temperature) {
  if (temperature >= 0 && temperature <= 20)
    return -1; // liiga kylm
  else if (temperature >= 21 && temperature <= 40)
    return 0; // ideaalne temperatuur
  else if (temperature >= 41 && temperature <= 60)
    return 1; // liiga kuum
}
