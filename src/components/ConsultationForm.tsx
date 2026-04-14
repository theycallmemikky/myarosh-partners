"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      id="form"
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="border border-gold p-10 text-center">
          <div className="roman text-2xl mb-4">◆</div>
          <h3 className="font-display text-3xl text-parchment mb-4">
            Обращение принято.
          </h3>
          <p className="text-cream/70">
            Адвокат коллегии свяжется с вами в течение рабочего дня. Спасибо за
            доверие.
          </p>
        </div>
      ) : (
        <>
          <Field label="Ваше имя" name="name" type="text" required />
          <Field label="Телефон" name="phone" type="tel" required />
          <Field label="E-mail" name="email" type="email" />
          <div>
            <label className="label block mb-3">Краткое описание дела</label>
            <textarea
              name="message"
              rows={6}
              className="w-full bg-transparent border border-gold/30 px-5 py-4 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Опишите ситуацию в двух-трёх предложениях. Конфиденциальность гарантирована."
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="group inline-flex items-center gap-4 bg-gold text-ink px-10 py-5 text-[0.78rem] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Отправить обращение
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
          <p className="text-xs tracking-wide text-cream/40 pt-2">
            Нажимая «Отправить», вы подтверждаете согласие на обработку
            персональных данных в соответствии с адвокатской тайной и
            Федеральным законом № 152-ФЗ.
          </p>
        </>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label block mb-3">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-gold/30 py-3 text-cream text-lg placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
