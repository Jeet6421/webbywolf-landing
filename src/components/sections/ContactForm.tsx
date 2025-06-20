'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact Form Submitted:', data);
    reset(); // Clear the form
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          {...register('name')}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          {...register('email')}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Message</label>
        <textarea
          {...register('message')}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your message"
          rows={4}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {isSubmitSuccessful && (
        <p className="text-green-600 font-medium">Message submitted successfully!</p>
      )}

      <button
        type="submit"
        className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
      >
        Send Message
      </button>
    </form>
  );
}
