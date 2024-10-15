import React from 'react';

function Statistics() {
  const stats = [
    { value: '325', label: 'Kurs' },
    { value: '405', label: 'Egzersiz' },
    { value: '305', label: 'Çalışma Saati' },
    { value: '705', label: 'Mutlu Müşteri' }
  ];

  return (
    <section id="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Statistics;
