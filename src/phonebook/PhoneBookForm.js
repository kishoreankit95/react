import React, {useState, useRef, useEffect} from 'react';
import InformationTable from './InformationTable';

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

function PhoneBookForm({ addEntryToPhoneBook }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [userdtl, setUserdtl] = useState([]);

  const clickHandler = () => {
    setUserdtl((prev) => {
      let newObj = {
        firstName: ref1.current.value,
        lastName: ref2.current.value,
        phone: ref3.current.value
      };
      return [...prev, newObj];
    });
    // console.log(userdtl);
  };

  useEffect(() => {
    ref1.current.value = "Coder";
    ref2.current.value = "Byte";
    ref3.current.value = "8885559999";
    // console.log(userdtl);
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={style.form.container}
      >
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userFirstname"
          name="userFirstname"
          type="text"
          ref={ref1}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="userLastname"
          type="text"
          ref={ref2}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="userPhone"
          type="text"
          ref={ref3}
        />
        <br />
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
          onClick={clickHandler}
        />
      </form>

      <InformationTable data={userdtl} />
    </>
  );
}

export default PhoneBookForm