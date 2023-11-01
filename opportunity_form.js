const oppoStatus = [
 {
  K_OPPO_STATUS: 1,
  STATUS: "1. Initial Contact",
  SUCCESS: 0,
 },
 {
  K_OPPO_STATUS: 2,
  STATUS: "2. Demonstration",
  SUCCESS: 25,
 },
 {
  K_OPPO_STATUS: 3,
  STATUS: "3. Proposal",
  SUCCESS: 50,
 },
 {
  K_OPPO_STATUS: 4,
  STATUS: "4. Negotiation",
  SUCCESS: 75,
 },
 {
  K_OPPO_STATUS: 5,
  STATUS: "5. Order",
  SUCCESS: 100,
 },
];

const FormComponent = class {
 constructor() {
  this.form = document.querySelector("form");
  this.selectElement = document.getElementsByName("status")[0];
  this.selectInput = document.getElementsByName("success")[0];
  this.formButton = this.selectInput.nextElementSibling;
  this.output = document.querySelector(".output");
 }

 start() {
  this.getSelectOptions();
  this.getSuccessInput();
  this.setResultSubmission();
  this.setStyles();
 }

 // Retrieve all options for the select HTML element
 getSelectOptions() {
  oppoStatus.forEach((el) => {
   const option = document.createElement("option");
   option.value = el.K_OPPO_STATUS;
   option.text = el.STATUS;
   this.selectElement.appendChild(option);
  });
 }

 // Retrieve the right success index for the selected element
 getSuccessInput() {
  this.selectElement.addEventListener("change", () => {
   const status = oppoStatus.find(
    (el) => el.K_OPPO_STATUS.toString() === this.selectElement.value
   );
   if (status) this.selectInput.value = status.SUCCESS;
  });
 }

 // Manage and display the right outputs
 setResultSubmission() {
  this.form.addEventListener("submit", (e) => {
   e.preventDefault();

   const selectedStatus =
    this.selectElement.options[this.selectElement.selectedIndex].value;
   const selectSuccess = this.selectInput.value;

   const displayed = {
    status: parseInt(selectedStatus),
    success: parseInt(selectSuccess),
   };

   this.output.textContent = JSON.stringify(displayed);
  });
 }

};

const fc = new FormComponent();
fc.start();
