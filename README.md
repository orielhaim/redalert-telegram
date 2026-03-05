# 🚨 RedAlert Telegram Bot

בוט טלגרם לשליחת התראות **צבע אדום** בזמן אמת לערוץ או קבוצה בטלגרם.

המערכת מבוססת על [redalert.orielhaim.com](https://redalert.orielhaim.com) - שירות התראות בזמן אמת

---

## 📋 דרישות מקדימות

- [Node.js 18+)](https://nodejs.org)
- חשבון טלגרם
- מפתח API מ-redalert.orielhaim.com

---

## 🚀 התקנה מהירה

```bash
git clone https://github.com/orielhaim/redalert-telegram.git
cd redalert-telegram
npm install
```

---

## ⚙️ הגדרה - שלב אחר שלב

### שלב 1: יצירת בוט בטלגרם

1. פתחו את טלגרם וחפשו את **@BotFather**
2. שלחו לו את הפקודה `/newbot`
3. בחרו שם לבוט (למשל: `Red Alert Bot`)
4. בחרו שם משתמש לבוט (חייב להסתיים ב-`bot`, למשל: `my_redalert_bot`)
5. BotFather ישלח לכם **טוקן** - שמרו אותו, תצטרכו אותו בהמשך

### שלב 2: השגת מזהה קבוצה / ערוץ

1. צרו קבוצה בטלגרם (או השתמשו בקיימת)
2. הוסיפו את הבוט שיצרתם לקבוצה כמנהל עם הרשאות לשלוח הודעות
3. קבלו את המזהה (Chat ID)

### שלב 3: השגת מפתח API מ-RedAlert

1. היכנסו לאתר [redalert.orielhaim.com](https://redalert.orielhaim.com)
2. בקשו גישה ל-API
3. קבלו את מפתח ה-API שלכם

### שלב 4: הגדרת קובץ `.env`

העתיקו את הקובץ לדוגמה וערכו אותו:

```bash
cp .env.example .env
```

פתחו את `.env` ומלאו את הפרטים:

```env
BOT_TOKEN=BOT TOKEN FROM BOTFATHER
CHAT_ID=CHAT ID FROM GROUP OR CHANNEL
REDALERT_API_KEY=API KEY FROM REDALERT.ORIELHAIM.COM
```

### שלב 5: הפעלה

```bash
npm start
```

---

## 📝 התאמת הודעות

כל סוג התראה הוא **קובץ טקסט נפרד** בתיקיית `src/templates/`.
אפשר לערוך כל קובץ בחופשיות - לשנות את הטקסט, להוסיף או להוריד שורות, לסדר את המבנה כרצונכם.

### קבצי ההודעות

| קובץ | סוג התראה |
|---|---|
| `missiles.txt` | רקטות וטילים |
| `earthQuake.txt` | רעידת אדמה |
| `radiologicalEvent.txt` | אירוע רדיולוגי |
| `tsunami.txt` | צונאמי |
| `hostileAircraftIntrusion.txt` | חדירת כלי טיס עוין |
| `hazardousMaterials.txt` | חומרים מסוכנים |
| `terroristInfiltration.txt` | חדירת מחבלים |
| `endAlert.txt` | סיום אירוע |
| `general.txt` | ברירת מחדל - כשאין קובץ ספציפי לסוג ההתראה |

### משתנים דינאמיים

בתוך כל קובץ טמפלייט אפשר להשתמש במשתנים הבאים - הם יוחלפו אוטומטית בערכים האמיתיים:

| משתנה | תיאור | דוגמה |
|---|---|---|
| `{type}` | סוג ההתראה | `missiles` |
| `{title}` | כותרת ההתראה מפיקוד העורף | `ירי רקטות וטילים` |
| `{cities}` | רשימת ישובים, מופרדים בפסיק | `תל אביב, רמת גן, גבעתיים` |
| `{count}` | מספר הישובים | `3` |
| `{instructions}` | הנחיות התגוננות | `היכנסו למרחב המוגן ושהו בו 10 דקות` |
| `{time}` | שעת ההתראה (שעון ישראל) | `14:32:05` |
| `{date}` | תאריך ההתראה | `5.3.2026` |

---

MIT - השתמשו בחופשיות.