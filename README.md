﻿<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Spending Calculator</h1>

  <h2>Genel Bakış</h2>
  <p>Spending Calculator, kullanıcıların harcamalarını takip etmelerine yardımcı olmak için tasarlanmış basit bir web uygulamasıdır. Kullanıcılar harcama detaylarını (ürün ve fiyat) girebilir ve ödendi olarak işaretleyebilirler. Uygulama toplam harcamayı hesaplar ve kullanıcıların ödeme durumuna göre harcama listesini filtrelemelerine olanak tanır.</p>

  <h2>Özellikler</h2>
  <ul>
    <li><strong>Kullanıcı Girişi:</strong> Kullanıcılar isim, harcama başlığı ve fiyat girebilir.</li>
    <li><strong>Listeye Ekleme:</strong> Öğeler ödeme durumu ile birlikte harcama listesine eklenebilir.</li>
    <li><strong>Toplam Hesaplama:</strong> Uygulama toplam harcamayı hesaplar ve gösterir.</li>
    <li><strong>Filtreleme:</strong> Kullanıcılar tüm öğeleri, sadece ödenen öğeleri veya sadece ödenmeyen öğeleri gösterecek şekilde listeyi filtreleyebilir.</li>
    <li><strong>Yerel Depolama:</strong> Uygulama, kullanıcı adını yerel depolamada hatırlar.</li>
  </ul>

  <h2>Başlangıç</h2>
  <h3>Gereksinimler</h3>
  <ul>
    <li>Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)</li>
  </ul>

  <h3>Kurulum</h3>
  <ol>
    <li>Depoyu klonlayın:
      <pre><code>git clone https://https://github.com/ahmetberktas/JS-Spending-Calculator</code></pre>
    </li>
    <li>Proje dizinine gidin:
      <pre><code>cd JS-Spending-Calculator</code></pre>
    </li>
    <li>Uygulamayı çalıştırmak için <code>index.html</code> dosyasını tarayıcınızda açın.</li>
  </ol>

  <h2>Kullanım</h2>
  <ol>
    <li><strong>Kullanıcı Bilgilerini Girin:</strong> İlgili alana adınızı girin.</li>
    <li><strong>Harcama Ekleme:</strong>
      <ul>
        <li>Harcama başlığını girin.</li>
        <li>Fiyatı girin.</li>
        <li>Ödenmiş kutusunu işaretleyin (eğer ödendi ise).</li>
        <li>"Listeye Ekle" düğmesine tıklayın.</li>
      </ul>
    </li>
    <li><strong>Listeyi Görüntüleme ve Yönetme:</strong>
      <ul>
        <li>Eklenen öğeler harcama listesinde görünecektir.</li>
        <li>Açılır filtreyi kullanarak tüm öğeleri, sadece ödenenleri veya sadece ödenmeyenleri görüntüleyin.</li>
        <li>Bir öğeyi silmek için silme simgesine tıklayın.</li>
        <li>Bir öğeyi ödenmiş/ödenmemiş olarak işaretlemek için güncelleme simgesine tıklayın.</li>
      </ul>
    </li>
  </ol>

  <h2>Dosya Yapısı</h2>
  <pre><code>spending-calculator/
├── index.html      # Ana HTML dosyası
├── style.css       # Stil dosyası (CSS)
└── main.js         # İşlevsellik için JavaScript dosyası
</code></pre>

  <h2>Kod Açıklaması</h2>
  <h3>HTML (<code>index.html</code>)</h3>
  <p>Yapı, kullanıcının adı, harcama detaylarını gireceği bir form ve öğeleri görüntülemek için bölümler içerir.</p>

  <h3>CSS (<code>style.css</code>)</h3>
  <p>CSS dosyası, uygulamayı modern ve duyarlı bir tasarımla şekillendirir. Mobil görüntüleme için medya sorguları içerir.</p>

  <h3>JavaScript (<code>main.js</code>)</h3>
  <p>Kullanıcı etkileşimlerini yönetmek için işlevsellik içerir. Öğe ekleme, toplam harcamayı güncelleme, listeyi filtreleme ve kullanıcı adını yerel depolamada saklama işlevlerini içerir.</p>

  <h2>Katkıda Bulunma</h2>
  <ol>
    <li>Depoyu fork edin.</li>
    <li>Özellik dalınızı oluşturun (<code>git checkout -b feature/NewFeature</code>).</li>
    <li>Değişikliklerinizi commit edin (<code>git commit -m 'Add some NewFeature'</code>).</li>
    <li>Dalınıza push edin (<code>git push origin feature/NewFeature</code>).</li>
    <li>Bir pull request açın.</li>
  </ol>

  <h2>Lisans</h2>
  <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>

</body>
</html>
