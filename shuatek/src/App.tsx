import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Adjust background intensity on scroll
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const intensity = Math.min(1, scrollPercentage);
      document.body.style.backgroundColor = `rgba(0, 0, 0, ${intensity})`;
    };

    // Animate blocks on scroll
    const blocks = document.querySelectorAll('.block');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    blocks.forEach(block => observer.observe(block));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="block" id="block1">
        We go beyond traditional internet-based penetration testing by providing comprehensive on-site security assessments. Our team of ethical hackers simulates real-world attack scenarios, testing not only your digital defenses but also your physical security measures. By evaluating access controls, employee awareness, and internal network vulnerabilities, we uncover security gaps that remote testing simply can’t detect. With hands-on expertise and actionable insights, we help you build a stronger, more resilient security posture—because true protection starts from the inside out.
      </div>
      <div className="block" id="block2">
        Our team combines strategy, skill, and real-world tactics to put your security to the test. We think like attackers, probing both digital and physical defenses to uncover weaknesses that others overlook. By approaching each engagement with fresh eyes and adapting to your unique environment, we ensure no two assessments are the same. Whether it’s testing access controls, identifying blind spots, or challenging assumptions, our goal is to expose vulnerabilities before real threats can. The result? A deeper understanding of your security posture and actionable insights that help you stay ahead of evolving risks—because true security is more than just a checklist.
      </div>
      <div className="block" id="block3">
        Security isn’t a one-time fix—it’s a habit. Just like any essential upkeep, regular testing ensures your defenses stay sharp and effective. The reality is, security can fail in the simplest ways—a door left unlocked, an assumption left untested, a small gap that turns into a major breach. That’s why we make it easy to stay ahead. Our expert team does the hard work for you, identifying weaknesses before they become problems. Contact the experts at ShuaTEK today to schedule a consultation and ensure your organization remains protected—inside and out.
      </div>
    </>
  )
}

export default App
