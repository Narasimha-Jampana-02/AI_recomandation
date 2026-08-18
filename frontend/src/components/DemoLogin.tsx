import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, ArrowRight, UserCheck, Sparkles, Lock, Mail } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function DemoLogin() {
  const { loginDemoUser, setSection } = useStore();
  const [email, setEmail] = useState('student@demo.com');
  const [password, setPassword] = useState('demo123');
  const [name, setName] = useState('Alex Rivera (Student)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginDemoUser(email, name);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card max-w-md w-full p-6 sm:p-8 border-brand-500/40 bg-surface-900/90 shadow-2xl relative overflow-hidden"
      >
        {/* Glow ambient background */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Logo & Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-accent-cyan flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Layers size={22} className="text-white" />
          </div>
          <span className="badge bg-brand-500/20 text-brand-300 border-brand-500/40 text-[11px] font-mono mb-2">
            <Sparkles size={11} className="mr-1" /> Prototype Environment
          </span>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Student Demo Login
          </h2>
          <p className="text-xs text-surface-400 mt-1">
            Access the simulated 25-reel behavioral environment
          </p>
        </div>

        {/* Privacy & Safe Mode Disclaimer */}
        <div className="p-3 rounded-xl bg-surface-950/80 border border-surface-800 text-xs text-surface-300 flex items-start gap-2.5 mb-6">
          <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Safe Local Simulation</span>
            <span className="text-surface-400 text-[11px]">
              No real social-media accounts or passwords are collected. All telemetry is generated locally in your session.
            </span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-surface-300 block mb-1">
              Demo Student Profile Name
            </label>
            <div className="relative">
              <UserCheck size={15} className="text-surface-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-950 border border-surface-700 text-sm text-white focus:border-brand-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-surface-300 block mb-1">
              Demo Student Email
            </label>
            <div className="relative">
              <Mail size={15} className="text-surface-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-950 border border-surface-700 text-sm text-white focus:border-brand-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-surface-300 block mb-1">
              Demo Password
            </label>
            <div className="relative">
              <Lock size={15} className="text-surface-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface-950 border border-surface-700 text-sm text-white focus:border-brand-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full text-sm py-3 justify-center mt-2 shadow-lg"
          >
            <span>Enter 25-Reel Interactive Feed</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-surface-800 text-center flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => setSection('landing')}
            className="text-surface-400 hover:text-white transition-colors"
          >
            ← Back to Homepage
          </button>
          <span className="font-mono text-surface-500 text-[11px]">TechLens v2.0</span>
        </div>
      </motion.div>
    </div>
  );
}
