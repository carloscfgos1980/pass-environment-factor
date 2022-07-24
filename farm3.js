const corn = {
    name: "corn",
    yield: 30,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },
};

const environmentFactors = {
    sun: "low",
};


const getYieldForPlantEF = (items, EF) => {
    console.log("Constant of Environment Factor", EF)
    itemYield = '';
    eFactor = '';
    [items].forEach((item) => {
        itemYield = item.yield;
        eFactor = item.factor.sun.low
        console.log("itemYield value:", itemYield);
        console.log("Environment Factor:", eFactor);
    })

}

getYieldForPlantEF(corn, environmentFactors);