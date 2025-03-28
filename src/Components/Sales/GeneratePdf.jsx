


// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const generatePDF = (cardId) => {
//   console.log(`Generating PDF for card ID: ${cardId}`);

//   const input = document.getElementById(`display-section-${cardId}`);
//   if (!input) {
//     console.error(`Element with ID "display-section-${cardId}" not found!`);
//     return;
//   }
//   console.log("Element content:", input.innerHTML); 
//   // 🛠️ Ensure the element is visible before capturing it
//   input.style.display = "block";

//   // Increase scale for better quality
//   html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
//     console.log("Canvas generated:", canvas);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgWidth = 190;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
//     pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
//     // console.log("Image Data URL:", imgData);

//     pdf.save(`template_${cardId}.pdf`);
//   });
  
// };

// export default generatePDF;




// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const generatePDF = (cardId) => {
//   console.log(`Generating PDF for card ID: ${cardId}`);

//   // Select the display section element
//   const input = document.getElementById(`display-section-${cardId}`);
//   if (!input) {
//     console.error(`Element with ID "display-section-${cardId}" not found!`);
//     return;
//   }

//   // Store the original display style
//   const originalDisplay = input.style.display;

//   // Temporarily make the display section visible
//   input.style.display = "block";

//   // Use html2canvas to capture the content of the display section
//   html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgWidth = 190;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     // Add the captured image to the PDF
//     pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

//     // Save the generated PDF
//     pdf.save(`template_${cardId}.pdf`);

//     // Revert the display section to its original visibility state
//     input.style.display = originalDisplay;
//   });
// };

// export default generatePDF;










import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const generatePDF = (templateId) => {
  console.log(`Generating PDF for card ID: templateId`);

  // Select the display section element
  const input = document.getElementById(templateId);
  if (!input) {
    console.error(`Element with ID "display-section-${templateId}" not found!`);
    return;
  }

  // Store the original display style
  const originalDisplay = input.style.display;

  // Temporarily make the display section visible
  input.style.display = "block";

  // Use html2canvas to capture the content of the display section
  html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add the captured image to the PDF
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    // Save the generated PDF
    pdf.save(`template_${templateId}.pdf`);

    // Revert the display section to its original visibility state
    input.style.display = originalDisplay;
  });
};

export default generatePDF;
