"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      id="form"
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="border border-line bg-surface p-10">
          <h3 className="font-display text-[1.75rem] text-ink leading-snug">
            Обращение принято.
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
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
            <label className="kicker block mb-2">Краткое описание дела</label>
            <textarea
              name="message"
              rows={5}
              className="w-full bg-surface border border-line px-4 py-3 text-ink placeholder:text-muted-2 focus:outline-none focus:border-ink transition-colors resize-none"
              placeholder="Опишите ситуацию в двух-трёх предложениях. Конфиденциальность гарантирована."
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-ink text-bg px-6 py-3.5 text-[0.95rem] rounded-full hover:bg-ink-2 transition-colors"
            >
              Отправить обращение
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
          <p className="text-xs text-muted leading-relaxed pt-1">
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
      <label className="kicker block mb-2">
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-surface border border-line px-4 py-3 text-ink placeholder:text-muted-2 focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
