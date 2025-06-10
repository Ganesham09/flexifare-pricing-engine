import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordRotate } from '@/components/ui/word-rotate';

const Hero = () => {
  useEffect(() => {
    // Initialize Unicorn Studio after component mounts
    if (window.UnicornStudio) {
      window.UnicornStudio.init()
        .then((scenes) => {
          console.log('Unicorn Studio scenes ready:', scenes);
        })
        .catch((err) => {
          console.error('Unicorn Studio error:', err);
        });
    }

    // Cleanup on unmount
    return () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Unicorn Studio Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        data-us-project="hZWSaBUswXwEPJzHJQPP"
        data-us-scale="1"
        data-us-dpi="1.5"
        data-us-lazyload="true"
        data-us-disablemobile="false"
        data-us-alttext="FlexiFare animated background"
        data-us-arialabel="Animated background for FlexiFare pricing engine"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Content overlay */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-white font-light leading-tight">
            <div className="text-6xl md:text-7xl xl:text-[5.25rem] font-inter">
              Configurable Pricing
            </div>
            <div className="text-6xl md:text-7xl xl:text-[5.25rem]">
              <span className="font-inter">Built for </span>
              <span className="font-playfair italic">
                <WordRotate 
                  words={["Flexibility.", "Transparency.", "Scale.", "Control."]} 
                  className="inline-block"
                />
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-md text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Easily manage and apply differential pricing based on distance, time, day, and waiting charges. 
          Tailored for ride services like Uber/Ola, built with customization in mind.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-700/90 hover:to-purple-700/90 backdrop-blur-sm border border-white/20 text-white px-8 py-3 text-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto rounded-full">
            Launch FlexiFare Engine 
            <ArrowRight size={20} />
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
