import React, { useState, useEffect } from 'react';
import WalletTable from '../components/WalletTable';
import AlertBanner from '../components/AlertBanner';
import { API_BASE_URL } from '../config';

function Dashboard() {
  const [wallets, setWallets] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Fake data na start (symulacja backendu)
    const exampleWallets = [
      { address: '7Gf9...abc', profit: 15300, roi: 250 },
      { address: '9Xn2...xyz', profit: 8900, roi: 120 },
    ];
    setWallets(exampleWallets);
    setAlertMessage('Multiple top wallets bought $SOLX!');
    
    // TODO: Później pobieraj prawdziwe dane z backendu
    // fetch(`${API_BASE_URL}/wallets`)
    //   .then(response => response.json())
    //   .then(data => setWallets(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>AgentSpy Dashboard</h1>
      <AlertBanner message={alertMessage} />
      <WalletTable wallets={wallets} />
    </div>
  );
}

export default Dashboard;
