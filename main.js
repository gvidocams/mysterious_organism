// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (num, strand) => {
    return {
        specimenNum: num,
        dna: strand,
        mutate() {
            let randomNum = Math.floor(Math.random() * this.dna.length)
            let oldBase = this.dna[randomNum];
            while(oldBase === this.dna[randomNum]) {
                this.dna[randomNum] = returnRandBase();
            }
            return this.dna;
        },
        compareDNA(DNA) {
            let identicalBasis = 0;
            for(let i = 0; i < this.dna.length; i++) {
                if(this.dna[i] === DNA[i]) {
                    identicalBasis++;
                }
            }
            let percentage = (identicalBasis / this.dna.length) * 100;
            console.log(`specimen #1 and specimen #2 have ${percentage.toFixed(2)}% DNA in common`)
        },
        willLikelySurvive() {
            cgBases = 0;
            for(let i = 0; i < this.dna.length; i++) {
                if(this.dna[i] === "C" || this.dna[i] === "G") cgBases++;
            }
            return((cgBases / this.dna.length) * 100 >= 60)
        }
    }
}

const createBatch = () => {
    const batch = [];
    for(let i = 0; i <= 29; i++){
        let instance = pAequorFactory(i, mockUpStrand());
        while(!instance.willLikelySurvive()) {
            instance = pAequorFactory(i, mockUpStrand());
        }
        batch.push(instance);
    }
    return batch;
}
console.log(createBatch());