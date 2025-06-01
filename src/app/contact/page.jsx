"use client";

import { useRef } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent } from "../../components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    alert("Message Sent Successfully!");
  };

  const icons = [
    <Instagram />,
    <Facebook />,
    <Twitter />,
    <Linkedin/>
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "tharique.21b@gmail.com",
      link: "mailto:tharique.21b@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9994381482",
      link: "tel:+919994381482",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, IN",
      link: "https://g.co/kgs/qfPN1MB",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center justify-center max-w-4xl">
      <motion.div
        className="w-full max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Have a project in mind? Feel free to reach out and let's create
          something amazing together.
        </motion.p>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.div>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4 mt-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4">
              {icons.map((_, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                >
                    {icons[index]}
                </motion.a>
              ))}
            </div>
            {/* <motion.div
              className=""
              animate={{ x: [0, -10, 10, 0], opacity: [1, 0.7, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowLeft />
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-card/80 backdrop-blur-lg border border-border rounded-2xl shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name")}
                      className="bg-background/50 border-border/50 h-14 px-5 rounded-xl focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-0"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 ml-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email")}
                      className="bg-background/50 border-border/50 h-14 px-5 rounded-xl focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-0"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 ml-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-background/50 border-border/50 h-14 px-5 rounded-xl focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register("message")}
                    className="bg-background/50 border-border/50 min-h-32 px-5 py-4 rounded-xl focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-0"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full py-6 text-lg bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all rounded-xl shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 text-center text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        © {new Date().getFullYear()} All Rights Reserved
      </motion.div>
    </div>
  );
}
