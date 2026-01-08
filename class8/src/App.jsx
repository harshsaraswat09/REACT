import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [Role, setRole] = useState("");
  const [Imageurl, setImageurl] = useState("");
  const [Description, setDescription] = useState("");

  const localdata = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setallUsers] = useState(localdata);

  const submithandler = (e) => {
    e.preventDefault();

     const newUsers = [...allUsers, { name, Role, Imageurl, Description }];

    setallUsers(newUsers);
    localStorage.setItem('all-users', JSON.stringify(newUsers));

    setname("");
    setRole("");
    setImageurl("");
    setDescription("");
  };

  const deleteHandler = (idx) => {
    const copyusers = [...allUsers];
    copyusers.splice(idx, 1);

    setallUsers(copyusers);
    localStorage.setItem('all-users',JSON.stringify(copyusers))

  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="px-2 py-2 flex flex-wrap"
      >
        <input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="border text-xl font-semibold  px-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter your name"
        />

        <input
          value={Imageurl}
          onChange={(e) => {
            setImageurl(e.target.value);
          }}
          className="border text-xl font-semibold px-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image url"
        />

        <input
          value={Role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="border text-xl font-semibold px-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter your position"
        />

        <input
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border text-xl font-semibold px-5 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="bg-emerald-400 text-xl active:scale-95 cursor-pointer font-semibold px-5 py-2 rounded w-[93%] m-2">
          Create User
        </button>
      </form>

      <div className="px-4 py-10 flex flex-wrap gap-5">
        {allUsers.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="w-[17vw] rounded p-4 px-8 flex items-center flex-col text-center h-80 bg-white text-black"
            >
              <img
                className="h-24 w-24 rounded-full object-cover object-center"
                src={elem.Imageurl}
                alt=""
              />
              <h1 className="text-2xl mt-2 font-semibold">{elem.name}</h1>
              <h5 className="text-lg text-blue-500 font-semibold my-3">
                {elem.Role}
              </h5>
              <p className="text-sm font-medium leading-tight">
                {elem.Description}
              </p>
              <button
                onClick={() => {
                  deleteHandler(idx);
                }}
                className="text-xs mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer active:scale-95"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
