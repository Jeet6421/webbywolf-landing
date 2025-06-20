'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('email')}
        placeholder="Enter your email"
        className="border p-2 w-full rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      {isSubmitSuccessful && <p className="text-green-500">Thanks for subscribing!</p>}
      <button type="submit" className="px-4 py-2 bg-primary text-white bg-black rounded hover:bg-blue-700 transition">
        Subscribe
      </button>
    </form>
  );
}
