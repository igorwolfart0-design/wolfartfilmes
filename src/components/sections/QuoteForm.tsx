"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/FormFields";
import { Section } from "@/components/ui/Section";
import { createQuoteMessage, createWhatsAppUrl } from "@/lib/whatsapp";
import type { QuoteFormValues } from "@/types/form";

const initialValues: QuoteFormValues = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  city: "",
  message: ""
};

const eventTypes = ["Casamento", "15 anos", "Ensaio", "Comercial", "Outro"];

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);

  function updateField(field: keyof QuoteFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(createWhatsAppUrl(createQuoteMessage(values)), "_blank", "noopener,noreferrer");
  }

  return (
    <Section
      id="orcamento"
      eyebrow="Contato"
      title="Conte a historia antes de pedir apenas um orcamento."
      description="O primeiro contato abre uma conversa no WhatsApp com as informacoes essenciais para entender atmosfera, data, lugar e intencao do projeto."
    >
      <form
        onSubmit={handleSubmit}
        className="brand-panel grid gap-5 p-5 sm:p-7 lg:grid-cols-2"
      >
        <Input
          label="Nome"
          name="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Seu nome"
          required
        />
        <Input
          label="Telefone"
          name="phone"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="(00) 00000-0000"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="voce@email.com"
          required
        />
        <Select
          label="Tipo de evento"
          name="eventType"
          value={values.eventType}
          onChange={(event) => updateField("eventType", event.target.value)}
          options={eventTypes}
          required
        />
        <Input
          label="Data"
          name="date"
          type="date"
          value={values.date}
          onChange={(event) => updateField("date", event.target.value)}
          required
        />
        <Input
          label="Cidade"
          name="city"
          value={values.city}
          onChange={(event) => updateField("city", event.target.value)}
          placeholder="Cidade e estado"
          required
        />
        <div className="lg:col-span-2">
          <Textarea
            label="Mensagem"
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Conte um pouco sobre o evento, estilo desejado e expectativas."
            required
          />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl text-sm leading-6 text-fog/60">
            Ao enviar, voce sera direcionado para o WhatsApp com a mensagem preenchida.
          </p>
          <Button type="submit">Enviar pelo WhatsApp</Button>
        </div>
      </form>
    </Section>
  );
}
