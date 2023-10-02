function ManageAddress() {
  let email = localStorage.getItem("email");

  const data = {
    userId: email,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  };

  let response = fetch("http://localhost:8000/fetchAddress", options).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(response);
    }
  );

  return (
    <div>hey</div>
  )
};

export default ManageAddress;
