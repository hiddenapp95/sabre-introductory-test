export const filters = [
    {name:"name",type:"input",inputType:"text"},
    {name:"position",type:"select",options:["Attacking Midfield",
                                            "Central Midfield",
                                            "Centre-Back",
                                            "Centre-Forward",
                                            "Defensive Midfield",
                                            "Keeper",
                                            "Left Midfield",
                                            "Left Wing",
                                            "Left-Back",
                                            "Right-Back"]},
    {name:"age",type:"input",inputType:"number"}];

export const DATE_OF_BIRTH_PROPERTY = "dateOfBirth";

export const playerObjectProperties = ["contractUntil","dateOfBirth","jerseyNumber","name","nationality","position"];