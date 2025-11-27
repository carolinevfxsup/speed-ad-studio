import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { toast } from 'sonner';
import { MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL').or(z.literal('')),
  package: z.string().min(1, 'Please select a package'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      website: '',
      package: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Discovery Call Request - ${data.package}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nWebsite: ${data.website}\nPackage: ${data.package}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:caroline.pires2d@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success(t.form.success);
    form.reset();
    setIsSubmitting(false);
  };

  const packages = [
    t.pricing.starter.name,
    t.pricing.growth.name,
    t.pricing.scale.name,
    t.pricing.bespoke.name,
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/351939517942', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display md:text-4xl mb-4">
              <span className="font-bold">{t.form.title.split(' ')[0]}</span>{' '}
              <span className="italic">{t.form.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Column */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.name}</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.email}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.website}</FormLabel>
                        <FormControl>
                          <Input type="url" {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.package}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-2 border-border focus:border-primary h-12">
                              <SelectValue placeholder={t.form.selectPackage} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {packages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.message}</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} className="border-2 border-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                    {isSubmitting ? '...' : t.form.submit}
                  </Button>
                </form>
              </Form>
            </div>

            {/* WhatsApp Column */}
            <div className="flex flex-col justify-center items-center p-12 bg-muted/30 rounded-lg border-2 border-border">
              <MessageCircle className="h-24 w-24 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-display font-bold mb-4 text-center">
                Prefer WhatsApp?
              </h3>
              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                Get instant responses and personalized support through WhatsApp. Connect with us directly for a faster conversation.
              </p>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="w-full max-w-xs h-12 text-base"
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
