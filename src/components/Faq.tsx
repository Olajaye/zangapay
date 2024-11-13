
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';


const faqs = [
  {
    question: 'How long does a transaction take?',
    answer: "All transactions on Zangapay are processed instantly. Whether you're converting airtime to cash, topping up your phone, or paying utility bills, the transaction will be completed within seconds.",
  },
  {
    question: 'How do I recharge my wallet?',
    answer: 'Recharging your wallet is easy and straightforward. Once you sign up on our app, a virtual account will be automatically created for you. You can fund your wallet by transferring money from your bank account to the virtual account. The wallet balance will be updated immediately after the transfer.',
  },
  {
    question: 'Is the app safe?',
    answer: 'Yes, Zangapay takes the security of your information very seriously. Our platform uses advanced encryption technology and complies with industry standards to ensure that your personal and financial data is always protected. Additionally, we have implemented robust fraud detection measures to safeguard your transactions.',
  },
  {
    question: 'How do I reach a customer care?',
    answer: 'We are always available to assist you 24/7. You can reach our customer care team via the contact options provided in the app, including live chat, phone calls, and email. We are committed to resolving your queries and providing support at any time of the day.',
  },
];

export default function FAQ() {
  return (
    <section className=" pt-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Zangapay Frequently Asked Questions (FAQs)</h2>
            <p className="text-gray-600">Find answers to common questions about our service</p>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}