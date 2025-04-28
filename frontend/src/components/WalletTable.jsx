import React from 'react';

function WalletTable({ wallets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Wallet Address</th>
          <th>Profit</th>
          <th>ROI (%)</th>
        </tr>
      </thead>
      <tbody>
        {wallets.map((wallet, index) => (
          <tr key={index}>
            <td>{wallet.address}</td>
            <td>${wallet.profit.toLocaleString()}</td>
            <td>{wallet.roi}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WalletTable;
