import React from 'react';
import { Table } from 'react-bootstrap';

const VisitDisplayPdf = ({ modalContent }) => {
  return (
    <>
      {modalContent === "visitDisplay" && (
        <Table bordered className="visit-table">
          <tbody>
            <tr>
              <td className="label-cell">PROJECT NAME</td>
              <td className="value-cell"></td>
              <td className="label-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">MAHARERA NO</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Firm Name / PROJECT NAME / WING NO E / UNIT NO 208 - fn/P</td>
              <td className="value-cell"></td>
              <td className="label-cell">Date :</td>
            </tr>
            <tr>
              <td className="label-cell">UNIT No</td>
              <td className="value-cell"></td>
              <td className="label-cell">WING:</td>
            </tr>
            <tr>
              <td className="label-cell">CARPET</td>
              <td className="value-cell"></td>
              <td className="label-cell">UNIT TYPE:</td>
            </tr>
            <tr>
              <td className="label-cell">OPEN/ENCLOSED BALCONY AS SANCTIONED</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">TERRACE</td>
              <td className="label-cell">ATT. TERRACE CARPET AREA</td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">SITOUT</td>
              <td className="value-cell">BALCONY AREA/ SITOUR CARPET AREA</td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">PODIUM GARDEN</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">PORCH</td>
              <td className="value-cell">PORCH AREA</td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">TOP TERRACE</td>
              <td className="value-cell">TOP TERRACE CARPET AREA</td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">TOTAL USABLE AREA</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Agreement value</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">STAMP DUTY (AS APPLICABLE)</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">REGISTRATION (AS APPLICABLE)</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">GST @%</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Grand Total</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">This Cost Sheet is valid till (15 days from the date of booking)-</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Booking Cheque Favouring -</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Taxes Cheque Favouring -</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">STAMP DUTY AND REGISTRATION CHARGES TO BE PAID IMM</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Agreement should be registered within 21 days from the date of Ap</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Prior to agreement, the client should submit the loan sanction lette</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Execution of agreement will be subject to realisation of the payme</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">TDS (As Applicable)</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Government Charges/taxes are subject to change & would be ap</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Lumpsum Advance Maintenance Deposit shall be collected at the </td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Rates are subject to change without prior notice.</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Govt taxes to be paid by the buyer as per prevailing rates.</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">The above mentioned cost is based on the tentative area, the exac</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">This is purely conceptual & not a legal offering Company reserves</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Source of Enquiry</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">Agent Agent/Broker Name:</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">If any case, for any reason the unit is cancelled after registration, t</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
            <tr>
              <td className="label-cell">1st Applicant Name:</td>
              <td className="value-cell"></td>
              <td className="value-cell">Sign :</td>
            </tr>
            <tr>
              <td className="label-cell">Manager Name:</td>
              <td className="value-cell"></td>
              <td className="value-cell">Sign :</td>
            </tr>
            <tr>
              <td className="label-cell">***We are concerned about accuracy and timely payment, so custo</td>
              <td className="value-cell"></td>
              <td className="value-cell"></td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default VisitDisplayPdf;
