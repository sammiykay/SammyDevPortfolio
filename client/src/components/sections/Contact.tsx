import React, { useState } from "react";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
// import ReCAPTCHA from 'react-google-recaptcha';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { 
  SendHorizontal, 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Loader2, 
  CheckCircle2 
} from "lucide-react";





const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(5, "Please provide a detailed message (min 5 characters)")
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setIsSuccess(false);
  //   if (!recaptchaToken) {
  //   toast({
  //     title: "reCAPTCHA failed",
  //     description: "Please confirm you're not a robot.",
  //     variant: "destructive",
  //   });
  //   return;
  // }
    try {
      await apiRequest("POST", "/api/contact", {
      ...data,
      // recaptchaToken
    });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Message not sent",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      title: "Phone",
      value: "+234 9071502233"
    },
    {
      icon: <Mail size={18} />,
      title: "Email",
      value: "kayodeola47@gmail.com"
    },
    {
      icon: <MapPin size={18} />,
      title: "Location",
      value: "5 Akindele Lane, Fardock Estate, Iju Ishaga, Lagos, Nigeria"
    }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/sammiykay", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/oke-samson/", label: "LinkedIn" },
    { icon: <Twitter size={18} />, url: "https://twitter.com/sammiykay", label: "Twitter" },
    { icon: <Facebook size={18} />, url: "https://facebook.com/@sammiykay", label: "Facebook" }
  ];
  

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and collaborations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 flex items-start border border-border/50 bg-card/40 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 shrink-0 shadow-sm">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </Card>
            ))}
            
            <Card className="p-6 border border-border/50 bg-card/40 backdrop-blur-sm">
              <h3 className="font-medium mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </Card>
            
            {/* Response Time Card */}
            <Card className="p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">I typically respond to messages within 24-48 hours.</p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 rounded-2xl -z-10"></div>
            
            <Card className="p-8 border border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                {isSuccess && (
                  <span className="flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Message sent
                  </span>
                )}
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Full Name <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-background/60 border-border/70 focus-visible:ring-primary" 
                              {...field} 
                            />
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
                          <FormLabel className="text-foreground/80">Email Address <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              className="bg-background/60 border-border/70 focus-visible:ring-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this regarding?" 
                            className="bg-background/60 border-border/70 focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Your Message <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your project, questions, or what you'd like to discuss..." 
                            rows={5} 
                            className="bg-background/60 border-border/70 focus-visible:ring-primary resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <ReCAPTCHA
                  sitekey="6LdDyT0rAAAAAO0qyt4eyrszKBond9BZJsrj2Smc" // or hardcode for now
                  onChange={(token: string | null) => setRecaptchaToken(token)}
                  className="mt-4"
                /> */}

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full md:w-auto rounded-xl bg-gradient-to-r from-primary to-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendHorizontal className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      * You'll receive an email confirmation when I respond to your message.
                    </p>
                  </div>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
