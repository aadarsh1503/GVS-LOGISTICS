import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.div
     id="partners"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="py-12 items-center">
 
        <h2 className="text-center text-sm text-dgreen font-bold tracking-wide uppercase">
          Partners
        </h2>
        <p className="text-center text-black text-2xl font-semibold mb-8 my-4">
          We Work With The Best
        </p>
        <div className="grid grid-cols-4 gap-4 justify-items-center items-center max-w-5xl mx-auto">
          {/* Replace the src with your images */}
          <img
            src="https://gtl.id/partners/gosend.png"
            alt="Client 1"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/wahana.png"
            alt="Client 2"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/tiki.png"
            alt="Client 3"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/jne.png"
            alt="Client 4"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/jnt.png"
            alt="Client 5"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/lion.png"
            alt="Client 6"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/sap.png"
            alt="Client 7"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src="https://gtl.id/partners/ninja.png"
            alt="Client 8"
            className="w-[239.33px] h-[200px] object-contain"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Partners;
