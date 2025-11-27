// Set

    const countries = [
        "India",
        "Belgium",
        "Veitnam",
        "Serbia",
        "Serbia",
        "Ukarine"
    ];

    const unique_Con = new Set(countries); 
    const Country_Count = []
    for(const l of unique_Con) {
        const filterCon = countries.filter((con) => con === l) 
        Country_Count.push({country:l,countryCnt:filterCon.length})
    }

    
    Country_Count.sort((a,b)=> {
        return a.countryCnt - b.countryCnt;
    })
    console.log(Country_Count);

    // Union
    let a = [1,2,3,4,5]
    let b = [3,4,5,6]
    let c = [...a,...b]
    
    let A = new Set(a);
    let B = new Set(b);
    let Union = new Set(c);

    console.log(Union)
    
    // Intersection of sets
    const interSection = a.filter(l=>B.has(l));
    console.log(interSection)

    