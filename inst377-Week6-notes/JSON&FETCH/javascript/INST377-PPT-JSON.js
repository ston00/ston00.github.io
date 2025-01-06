function jsonManipulation() {
    let person = {
        "name": "Anmol Dash",
        "email": "adash2@umd.edu",
        "admissionYear": 2023
    }

    console.log("JSON:", person)
    const stringified = JSON.stringify(person);
    console.log("Stringified:", stringified)
    
    const parsed = JSON.parse(stringified)
    console.log("Parsed:", parsed)
    console.log("Email:", parsed.email)
}