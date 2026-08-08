import React, { useState } from 'react';
import { Home, Wrench, Package, CalendarPlus, ClipboardList, MapPin, Clock, Phone, CheckCircle2, Clock3 } from 'lucide-react';

// Data Layanan Servis
const services = [
  { id: 1, name: "Servis Ringan / Berkala", desc: "Cek karbu/injeksi, rem, rantai, oli, busi", time: "60-90 menit", price: "Rp50.000 - Rp75.000" },
  { id: 2, name: "Servis Berat / Full", desc: "Servis ringan + setel klep, CVT, kompresi", time: "2-3 jam", price: "Rp100.000 - Rp150.000" },
  { id: 3, name: "Ganti Oli Mesin", desc: "Ganti oli + filter oli", time: "15-30 menit", price: "Rp25.000 - Rp40.000" },
  { id: 4, name: "Ganti Oli Gardan", desc: "Khusus motor matic", time: "15-30 menit", price: "Rp20.000 - Rp35.000" },
  { id: 5, name: "Servis Sistem Rem", desc: "Cek kampas, minyak rem, penyetelan", time: "30-60 menit", price: "Rp35.000 - Rp60.000" },
  { id: 6, name: "Pembersihan CVT", desc: "Bersihkan debu, periksa kampas ganda", time: "60-90 menit", price: "Rp50.000 - Rp80.000" },
  { id: 7, name: "Cuci & Poles Motor", desc: "Cuci bersih, poles bodi, kilap velg", time: "60-90 menit", price: "Rp40.000 - Rp75.000" }
];

// Data Suku Cadang
const spareparts = [
  { id: 1, name: "Oli Mesin 4T (0,8 L)", spec: "20W-50 / 10W-40", price: "Rp35.000 - Rp45.000" },
  { id: 2, name: "Oli Gardan", spec: "10W-30, 120ml", price: "Rp15.000 - Rp25.000" },
  { id: 3, name: "Busi Standar", spec: "CPR6EA-9 / Setara", price: "Rp15.000 - Rp25.000" },
  { id: 4, name: "Kampas Rem Depan", spec: "Cakram / Universal", price: "Rp35.000 - Rp60.000" },
  { id: 5, name: "Kampas Rem Belakang", spec: "Tromol / Universal", price: "Rp30.000 - Rp55.000" },
  { id: 6, name: "V-Belt (Matic)", spec: "Standar / Aftermarket", price: "Rp85.000 - Rp160.000" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookings, setBookings] = useState([]);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '', phone: '', motor: '', service: '', date: '', time: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Menunggu Konfirmasi',
      timestamp: new Date().toISOString()
    };
    setBookings([newBooking, ...bookings]);
    alert("Pesanan berhasil dikirim! Silakan cek tab 'Status'.");
    setFormData({ name: '', phone: '', motor: '', service: '', date: '', time: '' });
    setActiveTab('status');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4 space-y-6 animate-in fade-in">
            <div className="bg-blue-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Selamat Datang di Bengkel Kita!</h2>
                <p className="text-blue-100 text-sm mb-4">Servis motor profesional oleh siswa SMKN 2 Wonogiri. Bebas antre panjang, cukup pesan dari rumah.</p>
                <button onClick={() => setActiveTab('book')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
                  Booking Sekarang
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-800 rounded-full opacity-50"></div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Informasi Bengkel</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Alamat Lengkap</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Jl. Wonogiri–Ngadirojo KM. 3, Bulusulur, Kec. Wonogiri, Kab. Wonogiri, Jawa Tengah 57651</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Jam Operasional</p>
                    <p className="text-xs text-gray-500">Senin – Jumat (07.00 – 15.00 WIB)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Telepon / WhatsApp</p>
                    <p className="text-xs text-gray-500">085129603174</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="p-4 animate-in fade-in pb-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Layanan Jasa</h2>
            <div className="space-y-3">
              {services.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                    <span className="font-bold text-orange-600 text-sm">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded-md mt-1">
                    <Clock3 size={12} /> {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'parts':
        return (
          <div className="p-4 animate-in fade-in pb-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Katalog Suku Cadang</h2>
            <div className="grid grid-cols-2 gap-3">
              {spareparts.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 leading-tight mb-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{item.spec}</p>
                  </div>
                  <span className="font-bold text-orange-600 text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'book':
        return (
          <div className="p-4 animate-in fade-in pb-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Formulir Pemesanan</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Pemesan</label>
                  <input required type="text" className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Masukkan nama..." 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">No. WhatsApp</label>
                  <input required type="tel" className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0812..." 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Merek & Plat Motor</label>
                  <input required type="text" className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Honda Beat AD 1234 XY" 
                    value={formData.motor} onChange={e => setFormData({...formData, motor: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Jenis Layanan</label>
                  <select required className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                    <option value="">Pilih layanan...</option>
                    {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Tanggal</label>
                    <input required type="date" className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" 
                      value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Jam Booking</label>
                    <input required type="time" className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" 
                      value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                  </div>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-md transition mt-4">
                  Kirim Pesanan
                </button>
              </form>
            </div>
          </div>
        );

      case 'status':
        return (
          <div className="p-4 animate-in fade-in pb-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Status Pesanan Saya</h2>
            {bookings.length === 0 ? (
              <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-10">
                <ClipboardList className="mx-auto text-gray-300 mb-3" size={48} />
                <p className="text-gray-500 text-sm">Belum ada pesanan servis.</p>
                <button onClick={() => setActiveTab('book')} className="text-blue-600 font-semibold text-sm mt-2">Buat pesanan sekarang</button>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map(book => (
                  <div key={book.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 border-l-4 border-l-yellow-400">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500 font-mono">ID: #{book.id.toUpperCase()}</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                        {book.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">{book.motor}</h3>
                    <p className="text-sm text-gray-600 mb-2">{book.service}</p>
                    <div className="flex gap-4 text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center gap-1"><CalendarPlus size={12}/> {book.date}</div>
                      <div className="flex items-center gap-1"><Clock3 size={12}/> {book.time} WIB</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 relative max-w-md mx-auto shadow-2xl overflow-hidden">
      {/* Top Header */}
      <header className="bg-white px-4 py-4 sticky top-0 z-20 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
            <Wrench className="text-orange-400" size={18} />
          </div>
          <div>
            <h1 className="font-bold text-gray-800 text-base leading-tight">Bengkel Kita</h1>
            <p className="text-[10px] text-gray-500 uppercase font-semibold">SMKN 2 Wonogiri</p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="min-h-[calc(100vh-140px)]">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 flex justify-around items-center pb-safe z-30 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home size={22} />} label="Beranda" />
        <NavButton active={activeTab === 'services'} onClick={() => setActiveTab('services')} icon={<Wrench size={22} />} label="Layanan" />
        <NavButton active={activeTab === 'book'} onClick={() => setActiveTab('book')} icon={<CalendarPlus size={22} />} label="Booking" isPrimary />
        <NavButton active={activeTab === 'parts'} onClick={() => setActiveTab('parts')} icon={<Package size={22} />} label="Onderdil" />
        <NavButton active={activeTab === 'status'} onClick={() => setActiveTab('status')} icon={<ClipboardList size={22} />} label="Status" />
      </nav>
    </div>
  );
}

// Komponen Pembantu untuk Tombol Navigasi Bawah
function NavButton({ active, onClick, icon, label, isPrimary }) {
  if (isPrimary) {
    return (
      <button onClick={onClick} className="flex flex-col items-center justify-center -mt-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform ${active ? 'bg-orange-600 scale-105' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}>
          <div className="text-white">{icon}</div>
        </div>
        <span className={`text-[10px] mt-1 font-medium ${active ? 'text-orange-600' : 'text-gray-500'}`}>{label}</span>
      </button>
    );
  }

  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center w-16 py-3 transition-colors">
      <div className={`mb-1 ${active ? 'text-blue-700' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className={`text-[10px] font-medium ${active ? 'text-blue-700' : 'text-gray-500'}`}>{label}</span>
    </button>
  );
}