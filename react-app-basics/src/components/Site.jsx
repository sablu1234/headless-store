const Navigation = () =>{
    return <>
        <h1>Welvome to Navigation</h1>
    </>
}

const Site = () => {

    const students = [
        "Ajay",
        "Sanjay",
        "Dinesh",
        "Rakesh",
    ];

    const employee = {
        "name": "Janjay Kumar",
        "email": "Janjay@gmail.com",
    }

    return <>
        <div>Welcome site again</div>
        <p>This is a normal paragraph</p>

        {
            employee.email
        }

        <Navigation/>

        {
            students.map((singleStudent, index) => <li key={index}>{singleStudent}</li>)
        }
    </>
}

export default Site