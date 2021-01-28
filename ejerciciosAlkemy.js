const findPeaksElementsPositions = (nums) => {
  let peaks = [];
  const dontPeak = 'No hay picos';
  switch (nums.length) {
    case 0:
      return dontPeak;
    case 1:
      return 0;
    case 2:
      if (nums[0] === nums[1]) return dontPeak;
      nums[0] > nums[1] ? peaks.push(0) : peaks.push(1);
      return peaks;
    default: {
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
          peaks.push(i);
        }
      }
      nums[nums.length - 1] > nums[nums.length - 2]
        ? peaks.push(nums.length - 1)
        : null;
      if (peaks.length > 0) {
        return peaks;
      } else return dontPeak;
    }
  }
};

const timeConversion = (s) => {
  let hour = parseInt(s.split(':')[0]);
  const AmPm = s.includes('AM') ? 'AM' : 'PM';
  hour =
    hour < 12 && AmPm === 'PM'
      ? 12 + hour
      : hour === 12 && AmPm === 'PM'
      ? hour
      : hour < 12 && AmPm === 'AM'
      ? '0' + hour
      : '00';

  return `${hour}:${s.substring(3, 8)}`;
};
