export const filtersInfo = [
    {name:"name",inputType:"text"},
    {name:"position",inputType:"select",
        options:["Attacking Midfield", "Central Midfield", "Centre-Back", "Centre-Forward", "Defensive Midfield", "Keeper", "Left Midfield", "Left Wing", "Left-Back", "Right-Back"]},
    {name:"age",inputType:"number",max: 40,min:18}];

export const DATE_OF_BIRTH_PROPERTY = "dateOfBirth";

export const playerObjectProperties = ["contractUntil","dateOfBirth","jerseyNumber","name","nationality","position"];