(async function () {
  const profilesResponse = await fetch("/profiles");
  const profiles = await profilesResponse.json();
  const select = document.querySelector('select[name="profile"]');
  const anonymous = document.createElement("option");
  anonymous.value = anonymous.text = "כרטיס אנונימי";
  select.appendChild(anonymous);
  profiles
    .sort((p1, p2) => (p1.name > p2.name ? 1 : -1))
    .forEach((profile) => {
      const option = document.createElement("option");
      option.text = profile.name;
      option.value = profile.name;
      select.appendChild(option);
    });
})();

document
  .querySelector('input[type="file"]')
  .addEventListener("change", (evt) => {
    const reader = new FileReader();
    const file = evt.target.files[0];
    console.log("file", file);
    const preview = document.querySelector("#image-peview");
    const previewImage = preview.querySelector("img");
    reader.onload = () => {
      previewImage.setAttribute("src", reader.result);
    };
    reader.readAsDataURL(file);
  });
