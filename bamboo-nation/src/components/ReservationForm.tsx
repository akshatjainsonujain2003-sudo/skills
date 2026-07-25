"use client";

import { useForm } from "react-hook-form";
import { site } from "@/lib/site";

type FormValues = {
  name: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  message: string;
};

const occasions = ["Dinner", "Birthday", "Anniversary", "Corporate", "Kitty Party", "Other"];

/**
 * Reservation form. On submit it composes a WhatsApp message to the venue —
 * no backend required, and the guest gets an instant confirmation channel.
 */
export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: { guests: "2", occasion: "Dinner" },
  });

  const onSubmit = (v: FormValues) => {
    const lines = [
      `Hi! I'd like to reserve a table at ${site.name}.`,
      `Name: ${v.name}`,
      `Guests: ${v.guests}`,
      `Date: ${v.date}`,
      `Time: ${v.time}`,
      `Occasion: ${v.occasion}`,
      v.message ? `Note: ${v.message}` : "",
    ].filter(Boolean);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-6 p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="r-name" className="eyebrow mb-2.5 block !text-cream/70">
            Your name
          </label>
          <input
            id="r-name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            className="field"
            {...register("name", { required: "Please tell us your name" })}
          />
          {errors.name && (
            <p role="alert" className="mt-2 text-xs text-[#e08585]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="r-guests" className="eyebrow mb-2.5 block !text-cream/70">
            Guests
          </label>
          <select id="r-guests" className="field" {...register("guests", { required: true })}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="r-date" className="eyebrow mb-2.5 block !text-cream/70">
            Date
          </label>
          <input
            id="r-date"
            type="date"
            min={today}
            aria-invalid={!!errors.date}
            className="field [color-scheme:dark]"
            {...register("date", { required: "Pick a date" })}
          />
          {errors.date && (
            <p role="alert" className="mt-2 text-xs text-[#e08585]">
              {errors.date.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="r-time" className="eyebrow mb-2.5 block !text-cream/70">
            Time
          </label>
          <input
            id="r-time"
            type="time"
            min="12:00"
            max="23:00"
            aria-invalid={!!errors.time}
            className="field [color-scheme:dark]"
            {...register("time", { required: "Pick a time" })}
          />
          {errors.time && (
            <p role="alert" className="mt-2 text-xs text-[#e08585]">
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <span className="eyebrow mb-3 block !text-cream/70">Occasion</span>
        <div className="flex flex-wrap gap-2.5">
          {occasions.map((o) => (
            <label key={o} className="cursor-pointer">
              <input type="radio" value={o} className="peer sr-only" {...register("occasion")} />
              <span className="inline-block rounded-full border hairline px-4 py-2 font-ui text-xs tracking-[0.12em] text-cream/75 uppercase transition-colors peer-checked:border-gold peer-checked:bg-gold/10 peer-checked:text-gold peer-focus-visible:outline-2 peer-focus-visible:outline-gold">
                {o}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="r-message" className="eyebrow mb-2.5 block !text-cream/70">
          Anything we should know?
        </label>
        <textarea
          id="r-message"
          rows={3}
          placeholder="Allergies, cake on standby, a quiet corner…"
          className="field resize-none"
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-gold">
          Reserve via WhatsApp
        </button>
        <a href={`tel:${site.phoneHref}`} className="btn btn-ghost">
          or call {site.phone}
        </a>
      </div>

      {isSubmitSuccessful && (
        <p role="status" className="rounded-lg bg-forest/60 px-4 py-3 text-sm text-cream/90">
          WhatsApp should have opened with your request — send the message and we&rsquo;ll confirm your table right away.
        </p>
      )}
    </form>
  );
}
