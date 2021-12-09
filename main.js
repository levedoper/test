// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (SpecimenNum, dna) => {
  return {
    SpecimenNum: SpecimenNum,
    dna: dna,
    mutate () {
      let randomPicker = Math.floor(Math.random() * 15);
      let newDna = this.dna;
      let newLetter = (letter) => {
        switch (letter) {
          case 'A':
            const subBases = ['T','C','G']
            return subBases[Math.floor(Math.random() * 3)]
            break;

          case 'T':
            const subBases1 = ['A','C','G']
            return subBases1[Math.floor(Math.random() * 3)]
            break;

          case 'C':
            const subBases2 = ['T','A','G']
            return subBases2[Math.floor(Math.random() * 3)]
            break;

          case 'G':
            const subBases3 = ['T','C','A']
            return subBases3[Math.floor(Math.random() * 3)]
            break;

          default:
            break;
        }
      }
      newDna.splice(randomPicker,1,newLetter(newDna[randomPicker]))
      return newDna;
    },
    compareDNA (variant) {
      let coincidences = 0;
      for (let i = 0; i < (this.dna).length; i++) {
        if (this.dna[i] === variant[i]) {
          coincidences++;
        }
      }
      console.log(`Specimen #1 and Specimen #2 have %${(coincidences / 15)*100} DNA in common.`)
    },
    willLikelySurvive () {
      let probability = 0;
      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          probability++
        }
      })
      if (probability/15 >= 0.6) {
        return true;
      } else {
        return false;
      }
    } 
  }
}
let database = [];
for (let i = 0; i < 30; i++) {
  database.push(pAequorFactory(i,mockUpStrand()))
}
database.forEach((variant) => {
  console.log(variant.SpecimenNum,variant.dna)
})

console.log('test2')





