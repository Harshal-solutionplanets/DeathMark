"use client";

import React from "react";

interface TailoredFormProps {
  categoryId: string;
  formData: Record<string, string>;
  updateFormField: (key: string, value: string) => void;
}

export default function TailoredForm({ categoryId, formData, updateFormField }: TailoredFormProps) {
  const handleDateChange = (key: string, val: string) => {
    const clean = val.replace(/\D/g, "");
    let formatted = clean;
    if (clean.length > 2) {
      formatted = clean.slice(0, 2) + "/" + clean.slice(2);
    }
    if (clean.length > 4) {
      formatted = clean.slice(0, 2) + "/" + clean.slice(2, 4) + "/" + clean.slice(4, 6);
    }
    updateFormField(key, formatted);
  };

  switch (categoryId) {
    case "emergency_contact":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Select Person Type</label>
            <select 
              value={formData.personType || ""} 
              onChange={(e) => updateFormField("personType", e.target.value)} 
              className="form-select"
              required
            >
              <option value="">--Select--</option>
              <option value="Self">Self</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
              <option value="Executor">Executor</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="form-label">Person Name</label>
            <input 
              type="text" 
              value={formData.personName || ""} 
              onChange={(e) => updateFormField("personName", e.target.value)} 
              className="form-input" 
              placeholder="Enter Person name" 
              required 
            />
          </div>
          <div>
            <label className="form-label">Person Contact No</label>
            <input 
              type="text" 
              value={formData.contactNo || ""} 
              onChange={(e) => updateFormField("contactNo", e.target.value.replace(/\D/g, ''))} 
              className="form-input" 
              placeholder="10-digit Contact No" 
              required 
              pattern="\d{10}"
              maxLength={10}
              title="Contact number must be exactly 10 digits"
            />
          </div>
          <div className="form-field-full">
            <label className="form-label">Person Email</label>
            <input 
              type="email" 
              value={formData.email || ""} 
              onChange={(e) => updateFormField("email", e.target.value)} 
              className="form-input" 
              placeholder="Enter Person Email" 
            />
          </div>
          <div className="form-field-full">
            <label className="form-label">Person Address</label>
            <input 
              type="text" 
              value={formData.address || ""} 
              onChange={(e) => updateFormField("address", e.target.value)} 
              className="form-input" 
              placeholder="Enter Person Address" 
            />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea 
              value={formData.notes || ""} 
              onChange={(e) => updateFormField("notes", e.target.value)} 
              className="form-textarea" 
              placeholder="Enter Here.." 
              rows={4}
            />
          </div>
        </div>
      );

    case "real_estate":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Property Name</label>
            <input type="text" value={formData.propertyName || ""} onChange={(e) => updateFormField("propertyName", e.target.value)} className="form-input" placeholder="e.g. Landmark Apartment" required />
          </div>
          <div>
            <label className="form-label">Owner Name</label>
            <input type="text" value={formData.ownerName || ""} onChange={(e) => updateFormField("ownerName", e.target.value)} className="form-input" placeholder="Owner name" required />
          </div>
          <div>
            <label className="form-label">Estimated Value</label>
            <input type="text" value={formData.propertyValue || ""} onChange={(e) => updateFormField("propertyValue", e.target.value)} className="form-input" placeholder="e.g. $250,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Property Address</label>
            <input type="text" value={formData.propertyAddress || ""} onChange={(e) => updateFormField("propertyAddress", e.target.value)} className="form-input" placeholder="Enter Address details" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter Registration detail, registry date..." rows={4} />
          </div>
        </div>
      );

    case "demat_account":
    case "trading_account":
      const isDemat = categoryId === "demat_account";
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">{isDemat ? "DP Name" : "Broker Name"}</label>
            <input type="text" value={isDemat ? formData.dpName || "" : formData.brokerName || ""} onChange={(e) => updateFormField(isDemat ? "dpName" : "brokerName", e.target.value)} className="form-input" placeholder={isDemat ? "e.g. Zerodha, NSDL" : "e.g. AngelOne, Groww"} required />
          </div>
          <div>
            <label className="form-label">{isDemat ? "DP ID / Client ID" : "Client UCC / Code"}</label>
            <input type="text" value={isDemat ? formData.clientId || "" : formData.clientUcc || ""} onChange={(e) => updateFormField(isDemat ? "clientId" : "clientUcc", e.target.value)} className="form-input" placeholder="Enter Account identifier" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="E.g. Link to access, special instructions..." rows={4} />
          </div>
        </div>
      );

    case "mutual_fund":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Fund House / AMC</label>
            <input type="text" value={formData.fundHouse || ""} onChange={(e) => updateFormField("fundHouse", e.target.value)} className="form-input" placeholder="e.g. SBI Mutual Fund" required />
          </div>
          <div>
            <label className="form-label">Folio Number</label>
            <input type="text" value={formData.folioNo || ""} onChange={(e) => updateFormField("folioNo", e.target.value)} className="form-input" placeholder="Enter Folio number" required />
          </div>
          <div>
            <label className="form-label">Scheme Name</label>
            <input type="text" value={formData.schemeName || ""} onChange={(e) => updateFormField("schemeName", e.target.value)} className="form-input" placeholder="e.g. Bluechip Growth Fund" required />
          </div>
          <div>
            <label className="form-label">Units (Optional)</label>
            <input type="text" value={formData.holdingUnits || ""} onChange={(e) => updateFormField("holdingUnits", e.target.value)} className="form-input" placeholder="Number of units" />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee name" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter instructions..." rows={4} />
          </div>
        </div>
      );

    case "bank_account":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Bank Name</label>
            <input type="text" value={formData.bankName || ""} onChange={(e) => updateFormField("bankName", e.target.value)} className="form-input" placeholder="e.g. HDFC Bank" required />
          </div>
          <div>
            <label className="form-label">Account Number</label>
            <input type="text" value={formData.accountNo || ""} onChange={(e) => updateFormField("accountNo", e.target.value)} className="form-input" placeholder="Enter Account number" required />
          </div>
          <div>
            <label className="form-label">Account Type</label>
            <select value={formData.accountType || "Savings"} onChange={(e) => updateFormField("accountType", e.target.value)} className="form-select">
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
              <option value="Salary">Salary</option>
            </select>
          </div>
          <div>
            <label className="form-label">IFSC Code</label>
            <input 
              type="text" 
              value={formData.ifscCode || ""} 
              onChange={(e) => updateFormField("ifscCode", e.target.value.toUpperCase())} 
              className="form-input" 
              placeholder="IFSC Code" 
              pattern="[A-Z]{4}0[A-Z0-9]{6}"
              maxLength={11}
              style={{ textTransform: "uppercase" }}
              title="IFSC code must be 11 characters (e.g. HDFC0001234)"
            />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee registered" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Online credentials, debit card info..." rows={4} />
          </div>
        </div>
      );

    case "fixed_deposits":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Bank Name</label>
            <input type="text" value={formData.bankName || ""} onChange={(e) => updateFormField("bankName", e.target.value)} className="form-input" placeholder="e.g. ICICI Bank" required />
          </div>
          <div>
            <label className="form-label">Receipt Number</label>
            <input type="text" value={formData.receiptNo || ""} onChange={(e) => updateFormField("receiptNo", e.target.value)} className="form-input" placeholder="FD Number" required />
          </div>
          <div>
            <label className="form-label">FD Principal Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="Amount deposited" required />
          </div>
          <div>
            <label className="form-label">Maturity Date</label>
            <input 
              type="text" 
              value={formData.maturityDate || ""} 
              onChange={(e) => handleDateChange("maturityDate", e.target.value)} 
              className="form-input" 
              placeholder="DD/MM/YY" 
              pattern="^(0[1-9]|[12]\d|3[01])/(0[1-9]|1[0-2])/\d{2}$"
              maxLength={8}
              title="Maturity date must be in DD/MM/YY format (e.g. 25/12/26)"
            />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Interest rate, auto-renew status..." rows={4} />
          </div>
        </div>
      );

    case "crypto_currency":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Exchange / Wallet Name</label>
            <input type="text" value={formData.exchangeWallet || ""} onChange={(e) => updateFormField("exchangeWallet", e.target.value)} className="form-input" placeholder="e.g. Ledger, Binance" required />
          </div>
          <div>
            <label className="form-label">Coin / Token Symbol</label>
            <input type="text" value={formData.coinToken || ""} onChange={(e) => updateFormField("coinToken", e.target.value)} className="form-input" placeholder="e.g. BTC, ETH" required />
          </div>
          <div>
            <label className="form-label">Wallet Public Address</label>
            <input type="text" value={formData.walletAddress || ""} onChange={(e) => updateFormField("walletAddress", e.target.value)} className="form-input" placeholder="0x..." />
          </div>
          <div className="form-field-full">
            <label className="form-label">Backup Seed Mnemonic (Notes)</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Warning: Write your seed phrase here with caution. Make sure your vault password is secure." rows={4} />
          </div>
        </div>
      );

    case "bonds_certificates":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Issuer Name</label>
            <input type="text" value={formData.issuerName || ""} onChange={(e) => updateFormField("issuerName", e.target.value)} className="form-input" placeholder="e.g. RBI, NHAI, Sovereign Gold Bonds" required />
          </div>
          <div>
            <label className="form-label">Certificate / Folio / Bond Ledger ID</label>
            <input type="text" value={formData.certNo || ""} onChange={(e) => updateFormField("certNo", e.target.value)} className="form-input" placeholder="Enter Certificate or Folio No" required />
          </div>
          <div>
            <label className="form-label">Investment Face Value / Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹50,000" required />
          </div>
          <div>
            <label className="form-label">Maturity Date (Optional)</label>
            <input 
              type="text" 
              value={formData.maturityDate || ""} 
              onChange={(e) => handleDateChange("maturityDate", e.target.value)} 
              className="form-input" 
              placeholder="DD/MM/YY" 
              pattern="^(0[1-9]|[12]\d|3[01])/(0[1-9]|1[0-2])/\d{2}$"
              maxLength={8}
              title="Maturity date must be in DD/MM/YY format (e.g. 25/12/26)"
            />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="E.g. Interest payout details, depository details..." rows={4} />
          </div>
        </div>
      );

    case "mobile_wallet":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Wallet Name</label>
            <input type="text" value={formData.walletName || ""} onChange={(e) => updateFormField("walletName", e.target.value)} className="form-input" placeholder="e.g. Paytm, PhonePe, Google Pay" required />
          </div>
          <div>
            <label className="form-label">Linked Mobile Number</label>
            <input 
              type="text" 
              value={formData.linkedMobile || ""} 
              onChange={(e) => updateFormField("linkedMobile", e.target.value.replace(/\D/g, ''))} 
              className="form-input" 
              placeholder="10-digit Mobile No" 
              required 
              pattern="\d{10}"
              maxLength={10}
              title="Linked mobile number must be exactly 10 digits"
            />
          </div>
          <div>
            <label className="form-label">UPI ID (Optional)</label>
            <input type="text" value={formData.upiId || ""} onChange={(e) => updateFormField("upiId", e.target.value)} className="form-input" placeholder="e.g. name@okhdfc" />
          </div>
          <div>
            <label className="form-label">Nominee Name / Legal Successor</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee name" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="E.g. Account limits, backup email..." rows={4} />
          </div>
        </div>
      );

    case "pms":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Provider Name</label>
            <input type="text" value={formData.providerName || ""} onChange={(e) => updateFormField("providerName", e.target.value)} className="form-input" placeholder="e.g. Kotak PMS, ASK" required />
          </div>
          <div>
            <label className="form-label">Account Number</label>
            <input type="text" value={formData.accountNo || ""} onChange={(e) => updateFormField("accountNo", e.target.value)} className="form-input" placeholder="Enter PMS Account No" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee registered" required />
          </div>
          <div>
            <label className="form-label">Portfolio Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹5,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter details..." rows={4} />
          </div>
        </div>
      );

    case "aif":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Fund Name</label>
            <input type="text" value={formData.fundName || ""} onChange={(e) => updateFormField("fundName", e.target.value)} className="form-input" placeholder="e.g. True Beacon AIF" required />
          </div>
          <div>
            <label className="form-label">Investment Code / Folio</label>
            <input type="text" value={formData.investmentCode || ""} onChange={(e) => updateFormField("investmentCode", e.target.value)} className="form-input" placeholder="Enter Investment Code" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee registered" required />
          </div>
          <div>
            <label className="form-label">Investment Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹1,00,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter details..." rows={4} />
          </div>
        </div>
      );

    case "private_equity":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Company Name</label>
            <input type="text" value={formData.companyName || ""} onChange={(e) => updateFormField("companyName", e.target.value)} className="form-input" placeholder="e.g. Acme Corp" required />
          </div>
          <div>
            <label className="form-label">Investment Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹10,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter details..." rows={4} />
          </div>
        </div>
      );

    case "startup_investments":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Startup Name</label>
            <input type="text" value={formData.startupName || ""} onChange={(e) => updateFormField("startupName", e.target.value)} className="form-input" placeholder="e.g. TechLabs Pvt Ltd" required />
          </div>
          <div>
            <label className="form-label">Equity %</label>
            <input type="text" value={formData.equityPercent || ""} onChange={(e) => updateFormField("equityPercent", e.target.value)} className="form-input" placeholder="e.g. 2.5%" required />
          </div>
          <div>
            <label className="form-label">Amount Invested</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹5,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Shareholding certificate, vesting details..." rows={4} />
          </div>
        </div>
      );

    case "pf_ppf_epf":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">UAN / Account Number</label>
            <input 
              type="text" 
              value={formData.uanNumber || ""} 
              onChange={(e) => updateFormField("uanNumber", e.target.value.replace(/\D/g, ''))} 
              className="form-input" 
              placeholder="Enter UAN or PPF Account No" 
              required 
              pattern="\d{11,17}"
              maxLength={17}
              title="UAN or Account Number must be between 11 and 17 digits"
            />
          </div>
          <div>
            <label className="form-label">Account Type</label>
            <select value={formData.accountType || "EPF"} onChange={(e) => updateFormField("accountType", e.target.value)} className="form-select">
              <option value="EPF">EPF</option>
              <option value="PPF">PPF</option>
              <option value="GPF">GPF</option>
            </select>
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div>
            <label className="form-label">Balance Amount (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹15,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Enter instructions..." rows={4} />
          </div>
        </div>
      );

    case "nft":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">NFT Name</label>
            <input type="text" value={formData.nftName || ""} onChange={(e) => updateFormField("nftName", e.target.value)} className="form-input" placeholder="e.g. Bored Ape #1234" required />
          </div>
          <div>
            <label className="form-label">Collection Name</label>
            <input type="text" value={formData.collectionName || ""} onChange={(e) => updateFormField("collectionName", e.target.value)} className="form-input" placeholder="e.g. BAYC" required />
          </div>
          <div>
            <label className="form-label">Blockchain</label>
            <select value={formData.blockchain || "Ethereum"} onChange={(e) => updateFormField("blockchain", e.target.value)} className="form-select">
              <option value="Ethereum">Ethereum</option>
              <option value="Solana">Solana</option>
              <option value="Polygon">Polygon</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Wallet address or storage details..." rows={4} />
          </div>
        </div>
      );

    case "physical_shares":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Company / Share Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Reliance Industries Ltd" required />
          </div>
          <div>
            <label className="form-label">Estimated Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹5,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Physical certificate location, folio details..." rows={4} />
          </div>
        </div>
      );

    case "life_insurance":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Policy Provider / Title (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. LIC Jeevan Anand" required />
          </div>
          <div>
            <label className="form-label">Policy Number</label>
            <input type="text" value={formData.policyNo || ""} onChange={(e) => updateFormField("policyNo", e.target.value)} className="form-input" placeholder="Enter Policy No" required />
          </div>
          <div>
            <label className="form-label">Sum Assured / Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹10,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Maturity date, premium amount, agent contact..." rows={4} />
          </div>
        </div>
      );

    case "health_insurance":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Policy Provider / Title (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Star Health Assure" required />
          </div>
          <div>
            <label className="form-label">Policy Number</label>
            <input type="text" value={formData.policyNo || ""} onChange={(e) => updateFormField("policyNo", e.target.value)} className="form-input" placeholder="Enter Policy No" required />
          </div>
          <div>
            <label className="form-label">Cover Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹5,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="TPA info, premium due date..." rows={4} />
          </div>
        </div>
      );

    case "general_insurance":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Policy Provider / Title (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. HDFC Ergo Motor Insurance" required />
          </div>
          <div>
            <label className="form-label">Policy Number</label>
            <input type="text" value={formData.policyNo || ""} onChange={(e) => updateFormField("policyNo", e.target.value)} className="form-input" placeholder="Enter Policy No" required />
          </div>
          <div>
            <label className="form-label">Sum Insured / Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹3,50,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Expiry date, vehicle registration no..." rows={4} />
          </div>
        </div>
      );

    case "loan_given":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Debtor Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Rajesh Kumar" required />
          </div>
          <div>
            <label className="form-label">Loan Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹2,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name / Successor</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div>
            <label className="form-label">Due Date (Optional)</label>
            <input 
              type="text" 
              value={formData.dueDate || ""} 
              onChange={(e) => handleDateChange("dueDate", e.target.value)} 
              className="form-input" 
              placeholder="DD/MM/YY" 
              pattern="^(0[1-9]|[12]\d|3[01])/(0[1-9]|1[0-2])/\d{2}$"
              maxLength={8}
              title="Due date must be in DD/MM/YY format (e.g. 25/12/26)"
            />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Interest rate, agreement terms, links..." rows={4} />
          </div>
        </div>
      );

    case "movable_assets":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Asset Description (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Gold Jewellery 50g" required />
          </div>
          <div>
            <label className="form-label">Estimated Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹3,50,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div>
            <label className="form-label">Current Location / Storage</label>
            <input type="text" value={formData.location || ""} onChange={(e) => updateFormField("location", e.target.value)} className="form-input" placeholder="e.g. Bank Safe, Home Locker" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Bill details, specifications..." rows={4} />
          </div>
        </div>
      );

    case "vehicle_details":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Vehicle Model (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Honda City" required />
          </div>
          <div>
            <label className="form-label">Registration / Plate No</label>
            <input 
              type="text" 
              value={formData.registrationNo || ""} 
              onChange={(e) => updateFormField("registrationNo", e.target.value.toUpperCase())} 
              className="form-input" 
              placeholder="e.g. MH-12-AB-1234" 
              required 
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div>
            <label className="form-label">Estimated Value</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹6,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Insurance, hypothecation details..." rows={4} />
          </div>
        </div>
      );

    case "bank_locker":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Bank & Branch (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. HDFC Bank, Kothrud" required />
          </div>
          <div>
            <label className="form-label">Locker Number</label>
            <input type="text" value={formData.lockerNo || ""} onChange={(e) => updateFormField("lockerNo", e.target.value)} className="form-input" placeholder="Locker Number" required />
          </div>
          <div>
            <label className="form-label">Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div>
            <label className="form-label">Annual Rent / Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹5,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Key location, joint holders..." rows={4} />
          </div>
        </div>
      );

    case "membership_details":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Club / Org Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Country Club" required />
          </div>
          <div>
            <label className="form-label">Membership ID</label>
            <input type="text" value={formData.membershipId || ""} onChange={(e) => updateFormField("membershipId", e.target.value)} className="form-input" placeholder="ID Number" required />
          </div>
          <div>
            <label className="form-label">Nominee Name / Beneficiary</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee" required />
          </div>
          <div>
            <label className="form-label">Value / Fee (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹1,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Expiry date, access details..." rows={4} />
          </div>
        </div>
      );

    case "liabilities_details":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Creditor / Loan Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. SBI Home Loan" required />
          </div>
          <div>
            <label className="form-label">Outstanding Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹25,00,000" required />
          </div>
          <div>
            <label className="form-label">Nominee / Co-borrower</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Co-borrower or contact" required />
          </div>
          <div>
            <label className="form-label">Due Date / EMI Date</label>
            <input type="text" value={formData.dueDate || ""} onChange={(e) => updateFormField("dueDate", e.target.value)} className="form-input" placeholder="e.g. 5th of every month" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Collateral details, insurance status..." rows={4} />
          </div>
        </div>
      );

    case "important_documents":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Document Title (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Property Registration Deed" required />
          </div>
          <div>
            <label className="form-label">Physical Location</label>
            <input type="text" value={formData.location || ""} onChange={(e) => updateFormField("location", e.target.value)} className="form-input" placeholder="e.g. Home Safe Drawer" required />
          </div>
          <div>
            <label className="form-label">Nominee / Custodian</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Custodian or recipient" required />
          </div>
          <div>
            <label className="form-label">Associated Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="Value/Description" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Reference numbers, dates, copies location..." rows={4} />
          </div>
        </div>
      );

    case "website_credentials":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Website / App Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Upstox Portal" required />
          </div>
          <div>
            <label className="form-label">Website URL / Link</label>
            <input 
              type="url" 
              value={formData.websiteUrl || ""} 
              onChange={(e) => updateFormField("websiteUrl", e.target.value)} 
              className="form-input" 
              placeholder="e.g. https://upstox.com" 
              required 
              title="Enter a valid URL starting with http:// or https://"
            />
          </div>
          <div>
            <label className="form-label">Username / Login ID</label>
            <input type="text" value={formData.username || ""} onChange={(e) => updateFormField("username", e.target.value)} className="form-input" placeholder="Enter username" required />
          </div>
          <div>
            <label className="form-label">Nominee / Recipient Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Who should receive this" required />
          </div>
          <div>
            <label className="form-label">Associated Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="Portfolio/Wallet value" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Password / Access Hints (Notes)</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Warning: Write hints rather than plaintext passwords for better security." rows={4} required />
          </div>
        </div>
      );

    case "will_document":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Will Title (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Main Will 2026" required />
          </div>
          <div>
            <label className="form-label">Physical Location</label>
            <input type="text" value={formData.location || ""} onChange={(e) => updateFormField("location", e.target.value)} className="form-input" placeholder="e.g. Lawyer's Office Safe" required />
          </div>
          <div>
            <label className="form-label">Executor / Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Executor Name" required />
          </div>
          <div>
            <label className="form-label">Date of Will / Revision</label>
            <input 
              type="text" 
              value={formData.willDate || ""} 
              onChange={(e) => handleDateChange("willDate", e.target.value)} 
              className="form-input" 
              placeholder="DD/MM/YY" 
              pattern="^(0[1-9]|[12]\d|3[01])/(0[1-9]|1[0-2])/\d{2}$"
              maxLength={8}
              title="Date of Will must be in DD/MM/YY format (e.g. 25/12/26)"
            />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Lawyer details, registry details, witnesses..." rows={4} />
          </div>
        </div>
      );

    case "trust_document":
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Trust Name (Asset Title)</label>
            <input type="text" value={formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="e.g. Family Welfare Trust" required />
          </div>
          <div>
            <label className="form-label">Registration ID / Code</label>
            <input type="text" value={formData.registrationId || ""} onChange={(e) => updateFormField("registrationId", e.target.value)} className="form-input" placeholder="Registration ID" required />
          </div>
          <div>
            <label className="form-label">Trustee / Nominee Name</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Trustee Name" required />
          </div>
          <div>
            <label className="form-label">Trust Asset Value (Optional)</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="e.g. ₹50,00,000" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Additional Notes</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Trust terms, beneficiaries, bank details..." rows={4} />
          </div>
        </div>
      );

    default:
      // Generic fallback form for instruments with unlisted/simple shapes
      return (
        <div className="form-grid form-grid-3">
          <div>
            <label className="form-label">Asset Title / Label</label>
            <input type="text" value={formData.propertyName || formData.personName || formData.assetTitle || ""} onChange={(e) => updateFormField("assetTitle", e.target.value)} className="form-input" placeholder="Name or title" required />
          </div>
          <div>
            <label className="form-label">Associated Nominee</label>
            <input type="text" value={formData.nomineeName || ""} onChange={(e) => updateFormField("nomineeName", e.target.value)} className="form-input" placeholder="Nominee or Custodian" required />
          </div>
          <div>
            <label className="form-label">Holding Value / Amount</label>
            <input type="text" value={formData.amount || ""} onChange={(e) => updateFormField("amount", e.target.value)} className="form-input" placeholder="Value/Units" />
          </div>
          <div className="form-field-full">
            <label className="form-label">Detailed Description / Instructions</label>
            <textarea value={formData.notes || ""} onChange={(e) => updateFormField("notes", e.target.value)} className="form-textarea" placeholder="Explain details here..." rows={6} required />
          </div>
        </div>
      );
  }
}
