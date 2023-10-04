interface MajorCredits {
  credits: number;
  __brand: 'major credits';
}

interface MinorCredits {
  credits: number;
  __brand: 'minor credits';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum = {
    credits: subject1.credits + subject2.credits,
  };

  return sum as MajorCredits;
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const sum = {
    credits: subject1.credits + subject2.credits,
  };

  return sum as MinorCredits;
}
