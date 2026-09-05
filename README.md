# Tiny Weekly Review — مرور هفتگی TinyManager

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> مرور هفتگی بسیار کوتاه برای مدیر: چه چیزی خوب پیش رفت، چه چیزی گیر کرد، چه تصمیمی گرفته شد و هفته بعد روی چه چیزی تمرکز کنیم.

## وضعیت

**Foundation — 0.1.0**

قابلیت اجرایی هنوز منتشر نشده است؛ این Repository فعلاً قرارداد محصول و ماژول را مشخص می‌کند.

## اصل طراحی

مرور هفتگی نباید تبدیل به گزارش‌نویسی شود. سیستم باید بخش زیادی از اطلاعات را از سایر ماژول‌ها جمع کند و از مدیر فقط چیزهایی را بپرسد که واقعاً قابل استخراج نیستند.

مسیر آینده:

```text
Tiny AI: «مرور این هفته را آماده کن»
↓
جمع‌آوری خودکار Deadline / Risk / Delegation / Decisions
↓
نمایش خلاصه
↓
فقط ۱ تا ۳ سؤال ضروری
↓
تأیید و ذخیره Review
```

## قابلیت‌های برنامه‌ریزی‌شده

- Wins
- Blockers
- Decisions
- Slipped items
- Next-week top priorities
- جمع‌آوری خودکار داده از ماژول‌ها
- خروجی Markdown / JSON
- Dashboard Widget
- Tiny AI actions

## Tiny AI Actions برنامه‌ریزی‌شده

- `tiny-weekly-review.prepare`
- `tiny-weekly-review.complete`
- `tiny-weekly-review.export`

## معماری

TypeScript + React؛ قابل اجرا به‌صورت Standalone و Module داخل [TinyManager](https://github.com/webtanan-sketch/tinymanager).

## مجوز

MIT
