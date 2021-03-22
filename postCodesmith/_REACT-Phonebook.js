import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px"
    },
    form: {
        container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px"
        },
        inputs: {
            marginBottom: "5px"
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px"
        }
    }
};

function PhoneBookForm({ setPhonebook }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setPhonebook((prevState) => [
                    ...prevState,
                    {
                        userFirstName: firstName,
                        userLastName: lastName,
                        userPhone: phoneNumber
                    }
                ]);
            }}
            style={style.form.container}
        >
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                onChange={(e) => setFirstName(e.target.value)}
                className="userFirstname"
                name="userFirstname"
                type="text"
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                onChange={(e) => setLastName(e.target.value)}
                className="userLastname"
                name="userLastname"
                type="text"
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="userPhone"
                name="userPhone"
                type="text"
            />
            <br />
            <input
                style={style.form.submitBtn}
                className="submitButton"
                type="submit"
                value="Add User"
            />
        </form>
    );
}

function InformationTable({ phonebook }) {
    // const [sortedPhonebook, setSortedPhonebook] = useState([]);
    console.log("information table", phonebook);

    function compare(a, b) {
        if (a.userLastName[0] < b.userLastName[0]) {
            return -1;
        } else if (a.userLastName[0] > b.userLastName[0]) {
            return 1;
        } else {
            return 0;
        }
    }
    const rows = phonebook
        .sort((a, b) => compare(a, b))
        .map((el, i) => {
            return (
                <tr>
                    <th> {el.userFirstName}</th>
                    <th>{el.userLastName}</th>
                    <th> {el.userPhone} </th>
                </tr>
            );
        });

    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
                {rows}
            </thead>
        </table>
    );
}

function Application(props) {
    const [phonebook, setPhonebook] = useState([]);
    return (
        <section>
            <PhoneBookForm setPhonebook={setPhonebook} />
            <InformationTable phonebook={phonebook} />
        </section>
    );
}

ReactDOM.render(<Application />, document.getElementById("root"));
