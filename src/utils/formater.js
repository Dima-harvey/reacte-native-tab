export default getSurviving = time => {
    const minutes = Math.floor(time / 60);
    const secunds = time - minutes * 60;
    return {minutes: `0${minutes}`.slice(-2), secunds: `0${secunds}`.slice(-2)}
  };
  