# 💰 Configurar Tus Wallets de Crypto

## ⚠️ IMPORTANTE: Reemplaza las Direcciones

Las direcciones actuales son de ejemplo. **DEBES reemplazarlas con las tuyas** para recibir los pagos.

---

## 📍 Dónde Cambiar las Direcciones

### Archivo: `app/components/CheckoutModal.tsx`

Busca estas líneas (aproximadamente línea 15-38):

```typescript
const paymentMethods = {
  btc: {
    address: "bc1ql0upf2d9xntcwzjrjx62j4h5vr09z62mcwwd6e",  // ← CAMBIAR
    amount: (plan.price / 45000).toFixed(8),
    name: "Bitcoin (BTC)",
    icon: "₿",
    color: "from-orange-500 to-yellow-500"
  },
  eth: {
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",  // ← CAMBIAR
    amount: (plan.price / 2500).toFixed(6),
    name: "Ethereum (ETH)",
    icon: "Ξ",
    color: "from-blue-500 to-purple-500"
  },
  usdt: {
    address: "TYDzsYUEpvnYmQk4zGP9sWWcTEd2MiAtW6",  // ← CAMBIAR
    amount: plan.price.toFixed(2),
    name: "Tether (USDT)",
    icon: "₮",
    color: "from-green-500 to-emerald-500"
  },
  ltc: {
    address: "LdP8Qox1VAhCzLJNqrr74YovaWYyNBUWvL",  // ← CAMBIAR
    amount: (plan.price / 85).toFixed(6),
    name: "Litecoin (LTC)",
    icon: "Ł",
    color: "from-gray-400 to-gray-600"
  }
}
```

---

## 🔧 Cómo Obtener Tus Direcciones

### 1. Bitcoin (BTC)

**Wallets Recomendadas:**
- Electrum (Desktop)
- Trust Wallet (Mobile)
- Ledger/Trezor (Hardware)

**Pasos:**
1. Abre tu wallet Bitcoin
2. Ve a "Recibir" o "Receive"
3. Copia la dirección (empieza con `bc1...` o `1...` o `3...`)
4. Pégala en el código

**Formato válido:**
- `bc1...` (SegWit - Recomendado)
- `1...` (Legacy)
- `3...` (SegWit compatible)

---

### 2. Ethereum (ETH)

**Wallets Recomendadas:**
- MetaMask (Browser/Mobile)
- Trust Wallet (Mobile)
- Ledger/Trezor (Hardware)

**Pasos:**
1. Abre tu wallet Ethereum
2. Copia tu dirección (empieza con `0x...`)
3. Pégala en el código

**Formato válido:**
- `0x...` (42 caracteres)

**⚠️ IMPORTANTE:** La misma dirección sirve para ETH y USDT (ERC-20)

---

### 3. Tether (USDT)

**Redes Disponibles:**
- **ERC-20** (Ethereum) - Recomendado
- TRC-20 (Tron)
- BEP-20 (Binance Smart Chain)

**Pasos:**
1. Usa la misma dirección que ETH si es ERC-20
2. O genera una dirección TRC-20 (empieza con `T...`)
3. Pégala en el código

**Formato válido:**
- `0x...` (ERC-20 - Ethereum)
- `T...` (TRC-20 - Tron)

**💡 Recomendación:** Usa ERC-20 (misma dirección que ETH)

---

### 4. Litecoin (LTC)

**Wallets Recomendadas:**
- Litecoin Core (Desktop)
- Trust Wallet (Mobile)
- Ledger/Trezor (Hardware)

**Pasos:**
1. Abre tu wallet Litecoin
2. Ve a "Recibir" o "Receive"
3. Copia la dirección (empieza con `L...` o `M...`)
4. Pégala en el código

**Formato válido:**
- `L...` (Legacy)
- `M...` (SegWit)

---

## 💱 Ajustar Conversiones de Precio

Las conversiones actuales son aproximadas. Actualízalas según el precio actual:

```typescript
// Precios aproximados (Actualizar según mercado)
btc: (plan.price / 45000).toFixed(8)  // 1 BTC ≈ €45,000
eth: (plan.price / 2500).toFixed(6)   // 1 ETH ≈ €2,500
usdt: plan.price.toFixed(2)           // 1 USDT ≈ €1
ltc: (plan.price / 85).toFixed(6)     // 1 LTC ≈ €85
```

**Dónde ver precios actuales:**
- CoinMarketCap.com
- CoinGecko.com
- Binance.com

---

## ✅ Verificar que Funciona

### 1. Prueba Local

```bash
npm run dev
```

1. Abre http://localhost:3000
2. Click en "COMPRAR AHORA"
3. Selecciona cada método de pago
4. Verifica que el QR se genera correctamente
5. Escanea con tu wallet para confirmar

### 2. Prueba con Wallet Real

**Bitcoin:**
```
bitcoin:TU_DIRECCION?amount=0.00033333
```

**Ethereum:**
```
ethereum:TU_DIRECCION?value=0.006
```

**USDT/LTC:**
```
TU_DIRECCION
```

### 3. Verifica el QR

- Escanea el QR con tu wallet
- Debe abrir automáticamente con la dirección correcta
- Debe mostrar la cantidad correcta
- Debe permitir confirmar el pago

---

## 🔒 Seguridad

### ✅ Buenas Prácticas:

1. **Usa wallets propias**
   - Nunca uses wallets de exchanges directamente
   - Usa wallets donde controles las claves privadas

2. **Verifica las direcciones**
   - Copia y pega, no escribas manualmente
   - Verifica los primeros y últimos caracteres

3. **Haz pruebas**
   - Envía una pequeña cantidad primero
   - Confirma que recibes el pago
   - Luego activa para clientes

4. **Backup de claves**
   - Guarda tus seed phrases en lugar seguro
   - Nunca las compartas con nadie
   - Considera usar hardware wallet

5. **Monitorea pagos**
   - Revisa tus wallets regularmente
   - Configura notificaciones si es posible
   - Usa block explorers para verificar

---

## 🌐 Block Explorers

Para verificar transacciones:

**Bitcoin:**
- https://blockchair.com/bitcoin
- https://blockchain.com/explorer

**Ethereum:**
- https://etherscan.io
- https://ethplorer.io

**Tether (USDT):**
- https://etherscan.io (ERC-20)
- https://tronscan.org (TRC-20)

**Litecoin:**
- https://blockchair.com/litecoin
- https://live.blockcypher.com/ltc

---

## 📱 Wallets Recomendadas

### Multi-Crypto (Todas en una)

**Trust Wallet** (Mobile)
- ✅ BTC, ETH, USDT, LTC
- ✅ Fácil de usar
- ✅ Gratis
- ✅ iOS y Android

**Exodus** (Desktop/Mobile)
- ✅ BTC, ETH, USDT, LTC
- ✅ Interfaz bonita
- ✅ Gratis
- ✅ Windows, Mac, Linux, iOS, Android

### Hardware Wallets (Más Seguras)

**Ledger Nano S/X**
- ✅ Todas las cryptos
- ✅ Máxima seguridad
- ✅ €59-119

**Trezor One/Model T**
- ✅ Todas las cryptos
- ✅ Open source
- ✅ €69-219

---

## 🚀 Después de Configurar

1. **Commit los cambios:**
```bash
git add app/components/CheckoutModal.tsx
git commit -m "feat: Configurar wallets de crypto reales"
git push origin main
```

2. **Deploy a producción:**
```bash
vercel --prod
```

3. **Prueba en producción:**
- Abre tu sitio
- Haz una compra de prueba
- Verifica que recibes el pago

4. **Monitorea:**
- Revisa tus wallets diariamente
- Procesa los pagos rápidamente
- Envía las licencias por email

---

## 💡 Tips Adicionales

### Automatizar Verificación de Pagos

Puedes usar APIs para verificar pagos automáticamente:

**Bitcoin:**
- Blockchain.info API
- BlockCypher API

**Ethereum:**
- Etherscan API
- Infura

**Ejemplo básico:**
```javascript
// Verificar pago Bitcoin
const checkBTCPayment = async (address, expectedAmount) => {
  const response = await fetch(
    `https://blockchain.info/q/addressbalance/${address}`
  )
  const balance = await response.json()
  return balance >= expectedAmount
}
```

### Notificaciones Discord

Recibe notificación cuando alguien paga:

```javascript
const notifyDiscord = async (payment) => {
  await fetch('TU_WEBHOOK_DISCORD', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `💰 Nuevo pago recibido!\n` +
               `Método: ${payment.method}\n` +
               `Cantidad: ${payment.amount}\n` +
               `Email: ${payment.email}`
    })
  })
}
```

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar solo Bitcoin?**
R: Sí, puedes eliminar los otros métodos del código. Pero tener más opciones aumenta las ventas.

**P: ¿Necesito KYC para recibir pagos?**
R: No, las wallets personales no requieren KYC. Solo los exchanges.

**P: ¿Qué pasa si me equivoco en la dirección?**
R: Los pagos se perderán. Verifica 3 veces antes de publicar.

**P: ¿Puedo cambiar las direcciones después?**
R: Sí, pero los QR antiguos seguirán apuntando a las direcciones viejas.

**P: ¿Cómo convierto crypto a EUR?**
R: Usa exchanges como Binance, Kraken, o Coinbase.

**P: ¿Debo declarar los ingresos?**
R: Consulta con un contador. Las leyes varían por país.

---

## 🎯 Checklist Final

Antes de lanzar, verifica:

- [ ] Direcciones de crypto reemplazadas
- [ ] Conversiones de precio actualizadas
- [ ] QR codes probados con wallets reales
- [ ] Cada método de pago funciona
- [ ] Direcciones verificadas 3 veces
- [ ] Backup de seed phrases guardado
- [ ] Block explorers bookmarked
- [ ] Sistema de notificaciones configurado
- [ ] Proceso de envío de licencias listo
- [ ] Prueba de compra completa realizada

---

## 🆘 Soporte

Si tienes problemas:

1. Verifica que las direcciones sean válidas
2. Prueba con una wallet diferente
3. Revisa la consola del navegador (F12)
4. Verifica que el QR se genera correctamente
5. Consulta los block explorers

---

**¡Listo! Ahora tu sistema de pagos está configurado y funcionando! 💰🚀**
