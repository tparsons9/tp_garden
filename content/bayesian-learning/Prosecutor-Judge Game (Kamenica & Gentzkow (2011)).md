---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/example
---

## Introduction

The Prosecutor-Judge game is a canonical example from Kamenica & Gentzkow (2011) that illustrates the core insights of [[Bayesian Persuasion]]. It demonstrates how an informed party (the prosecutor) can strategically design information revelation to influence a decision-maker (the judge), even when both parties share common priors and the judge acts optimally given the information received.

The example reveals several key insights:
- **Strategic information design matters**: The prosecutor can do better than either revealing nothing or revealing everything
- **Partial pooling is optimal**: The optimal signal mixes innocent and guilty defendants in a carefully calibrated way
- **The power of the concave envelope**: The solution involves finding the [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope|upper concave envelope]] of the sender's indirect utility function

## Setup

- **Sender:** Prosecutor
- **Receiver:** Judge
- **States** $(\theta)$: Defendant is either innocent or guilty, $\theta \in \{ I,G \}$
-  **Prior**: The judge and prosecutor share a common prior that $P(G)=0.3$.
- **Actions** $(A)$: Judge chooses to **Acquit** or **Convict**
- **Payoffs:**
	- **Judge (Receiver):**
		- gets $1$ for the *correct* action, $(C,G),\ (A,I)$, and 0 otherwise.
		- Wants to convict $(C)$ if and only if the probability of guilt $\mathbb{P}(G)\geq 0.5$.
	- **Prosecutor (Sender):**
		- Gets $1$ if the judge convicts and 0 if they acquit

The **prosecutor** chooses information structure $\sigma:\{ G,I \}\to\Delta(S)$ for some set of signal realizations $S$. The **judge** observes the outcome of the signal $\sigma$ and updates his beliefs, choosing whether to acquit or convict the defendant.

## Benchmarks: What Information Should the Prosecutor Reveal?

Before analyzing the optimal information structure, let's consider two natural benchmarks to understand the prosecutor's incentives.

#### No Information (Completely Uninformative Signal)

If the prosecutor sends a completely uninformative signal—revealing nothing about the defendant's guilt—the judge must decide based solely on the prior belief that $P(G) = 0.3$. Since the probability of guilt is below the conviction threshold of $0.5$, the judge optimally chooses to **acquit**.

**Prosecutor's payoff**: $0$ (no convictions)

#### Perfect Information (Fully Revealing Signal)

Alternatively, suppose the prosecutor reveals the defendant's true guilt status perfectly. Then:
- When the defendant is guilty ($30\%$ of cases), the judge observes this and convicts
- When the defendant is innocent ($70\%$ of cases), the judge observes this and acquits

**Prosecutor's expected payoff** (under the prior): $0.3 \times 1 + 0.7 \times 0 = 0.3$

>[!question] Can the prosecutor do better?
>Is there an information structure that yields a higher expected payoff than $0.3$? The answer is **yes**, and understanding why requires analyzing the [[Sender's Indirect Utility Function]].

## Sender's Payoff and the Value of Persuasion

To analyze when persuasion is valuable, we need to understand the prosecutor's [[Sender's Indirect Utility Function]] $\hat{v}(\mu)$. This function maps the judge's posterior belief $\mu$ (the probability the defendant is guilty) to the prosecutor's expected payoff.

#### The Judge's Decision Rule

The [[Receiver's Optimal Action - Sender-Preferred Equilibrium|judge's optimal action]] depends on their belief $\mu$:
- **Convict** if $\mu \ge 0.5$ (more likely guilty than innocent)
- **Acquit** if $\mu < 0.5$ (more likely innocent than guilty)

Since the prosecutor gets payoff $1$ for conviction and $0$ for acquittal, this translates to the **indirect utility function**:

$$
\hat{v}(\mu) = \begin{cases}
1 & \text{if }\mu \ge 0.5 \text{ (Judge convicts)} \\
0 & \text{if }\mu < 0.5 \text{ (Judge acquits)}
\end{cases}
$$

This creates a **step function** shown in panel (a) below. The key insight: small changes in the judge's belief have *no effect* on the prosecutor's payoff—except at the critical threshold $\mu = 0.5$, where the judge switches from acquitting to convicting.

#### Why the Step Function Matters

The step function reveals a crucial non-concavity in the prosecutor's preferences over beliefs:
- At the prior $\mu_0 = 0.3 < 0.5$, the prosecutor gets payoff $\hat{v}(0.3) = 0$ (judge acquits)
- If the prosecutor could somehow induce belief $\mu = 0.5$, they'd get $\hat{v}(0.5) = 1$ (judge convicts)
- But the prosecutor cannot directly *choose* the judge's belief—they can only design a signal that generates a *distribution* over posterior beliefs

The question becomes: what distribution over posteriors, consistent with [[Bayes' Plausible|Bayes' Rule]], maximizes the prosecutor's expected payoff?


```tikz
\begin{document}
\begin{tikzpicture}[scale=1.4]
  % Panel (a) - Left side
  \begin{scope}[shift={(0,0)}]
    % Axes
    \draw[->] (0, 0) -- (4.5, 0) node[right] {$\mu$};
    \draw[->] (0, 0) -- (0, 2.5) node[above] {};

    % Tick marks and labels
    \node[below] at (1, -0.1) {$\mu_0$};
    \node[below] at (3, -0.1) {$1$};
    \node[left] at (0, 2) {$1$};

    % Step function v-hat(mu)
    \draw[very thick] (0, 0) -- (3, 0);
    \draw[very thick] (3, 2) -- (4.2, 2);

    % Points at discontinuity
    \draw[fill=white, thick] (3, 0) circle (0.08);
    \draw[fill=black] (3, 2) circle (0.08);

    % Prior point
    \draw[fill=white, thick] (1, 0) circle (0.08);

    % Label
    \node[above] at (3.5, 2) {$\hat{v}(\mu)$};

    % Panel label
    \node at (2, -0.7) {(a)};
  \end{scope}

  % Panel (b) - Right side
  \begin{scope}[shift={(5.5,0)}]
    % Axes
    \draw[->] (0, 0) -- (4.5, 0) node[right] {$\mu$};
    \draw[->] (0, 0) -- (0, 2.5) node[above] {};

    % Tick marks and labels
    \node[below] at (1, -0.1) {$\mu_0$};
    \node[below] at (3, -0.1) {$1$};
    \node[left] at (0, 2) {$1$};

    % Concave envelope V(mu) - linear from origin to (3,2), then flat
    \draw[very thick, blue] (0, 0) -- (3, 2) -- (4.2, 2);
    \fill[blue] (3, 2) circle (0.08);

    % Original v-hat(mu) step function
    \draw[thick] (0, 0) -- (3, 0);
    \draw[thick] (3, 2) -- (4.2, 2);
    \draw[fill=white, thick] (3, 0) circle (0.06);
    \draw[fill=black] (3, 2) circle (0.06);

    % Prior point and V(mu_0) value
    \draw[dotted] (1, 0) -- (1, 0.667);
    \draw[dotted] (0, 0.667) -- (1, 0.667);
    \draw[fill=white, thick] (1, 0) circle (0.08);
    \node[left] at (0, 0.667) {\small $V(\mu_0)$};

    % Labels
    \node[above right] at (3.5, 2) {$\hat{v}(\mu)$};
    \node[above left, blue] at (2.5, 1.5) {$V(\mu)$};

    % Panel label
    \node at (2, -0.7) {(b)};
  \end{scope}
\end{tikzpicture}
\end{document}
```

#### The Concave Envelope: Maximum Achievable Payoff

The [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope|upper concave envelope]] $V(\mu)$ represents the **maximum expected payoff** the prosecutor can achieve starting from any prior belief $\mu$, subject to [[Bayes' Plausible|Bayes' Rule]].

For this example, the concave envelope is:
$$
V(\mu) = \begin{cases}
1 & \text{if }\mu\geq 0.5 \\
2\mu & \text{if }\mu<0.5
\end{cases}
$$

This is shown as the blue line in panel (b) above.

**Interpreting the Concave Envelope:**

1. **When $\mu \ge 0.5$**: The judge already wants to convict, so the prosecutor's payoff is $1$—no persuasion needed. Here $V(\mu) = \hat{v}(\mu) = 1$.

2. **When $\mu < 0.5$**: The judge would acquit under the prior, but the prosecutor can do better by designing a signal that "splits" the prior into two posteriors:
   - With some probability, induce a high posterior $\mu_H \ge 0.5$ (judge convicts)
   - With complementary probability, induce a low posterior $\mu_L$ (judge acquits)

   The constraint is that these posteriors must average back to the prior $\mu_0$ (by [[Bayes' Plausible|Bayes' Rule]]).

3. **The formula $V(\mu) = 2\mu$ for $\mu < 0.5$**: This tells us the prosecutor can achieve *double* what they'd get from perfect information!
   - Perfect information gives expected payoff $\mu$ (convict only the $\mu$ fraction who are truly guilty)
   - Optimal persuasion gives $2\mu$ by strategically pooling innocent and guilty defendants

**At the prior $\mu_0 = 0.3$**: The prosecutor achieves $V(0.3) = 2 \times 0.3 = 0.6$, doubling the perfect information payoff of $0.3$.

**When does persuasion help?** The [[When (Bayesian) Persuasion is valuable|prosecutor benefits from persuasion]] whenever $\mu_{0}<0.5$, i.e., whenever the judge's [[Receiver's Optimal Action - Sender-Preferred Equilibrium|optimal action under the prior]] is to acquit. In these cases, $V(\mu_0) > \hat{v}(\mu_0)$: the concave envelope lies strictly above the indirect utility function.

## Optimal Persuasion

Having established that the prosecutor can achieve a payoff of $V(0.3) = 0.6$ (twice the perfect information benchmark!), we now construct the signal that achieves this.

By [[Value of a Signal (Kamenica-Gentzkow)]], the problem of finding the optimal signal reduces to finding an optimal [[Bayes' Plausible]] distribution of posteriors $\tau$ that maximizes $\mathbb{E}_{\tau}[\hat{v}(\mu)]$ subject to $\int \mu \, d\tau(\mu) = \mu_0$ (see [[Cor (K-G). Value of Optimal Signal]]).

**The key insight**: The optimal signal must induce posteriors that lie on the concave envelope $V(\mu)$. For our prosecutor, this means creating exactly two posteriors:
- **"Convict" signal** with posterior $\mu = 0.5$ (on the boundary, judge just barely convicts)
- **"Acquit" signal** with posterior $\mu = 0$ (fully innocent, judge acquits)

These must be weighted so they average back to the prior $\mu_0 = 0.3$.

### Constructing the Optimal Signal: An Iterative Approach

To build intuition, let's start from the perfectly revealing signal and improve upon it.

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
	\def \spacing {0.7}; 
	\def \astart {4.5}; 
  % Legend - positioned above and closer to boxes
  \fill[blue!60] (0.5, 3.2) circle (0.18);
  \node[right] at (0.75, 3.2) {\small INNOCENT};
  \draw[thick, fill=white] (3, 3.2) circle (0.18);
  \node[right] at (3.25, 3.2) {\small GUILTY};

  % CONVICT bin
  \draw[thick] (0, 0) rectangle (3.5, 2.5);
  \node[below] at (1.25, -0.3) {\textbf{CONVICT}};

  % 3 Guilty circles in CONVICT - arranged in triangle
  \draw[thick, fill=white] (1.9, 1.6) circle (0.28);
  \draw[thick, fill=white] (1.2, 0.8) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing, 0.8) circle (0.28);

  % ACQUIT bin
  \draw[thick] (4, 0) rectangle (7.5, 2.5);
  \node[below] at (4.75, -0.3) {\textbf{ACQUIT}};

  % 7 Innocent circles in ACQUIT - arranged in rows
  \fill[blue!60] (\astart, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing*2, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing*3, 1.8) circle (0.28);

  \fill[blue!60] (\astart , 0.9) circle (0.28);
  \fill[blue!60] (\astart +\spacing, 0.9) circle (0.28);
  \fill[blue!60] (\astart+\spacing, 0.9) circle (0.28);
  \fill[blue!60] (\astart+\spacing*2, 0.9) circle (0.28);
  \node[below] at (3.5,-1.0) {\textbf{Perfectly Revealing signal.}};
\end{tikzpicture}
\end{document}
```

>[!remark] Reading the Diagrams
>Every "bin representation" shown in the diagrams corresponds to a **unique** signal. For each $\theta \in\Theta,\ s \in \{ \text{convict},\ \text{acquit} \}$, let $P(\theta,s)$ be the mass of $\theta$-type units in bin $s$ (interpreting each circle as $1 /10$ the population). Then $P$ is a probability measure on $\Theta \times S$, and the corresponding signal $\sigma:\Theta\to\Delta(S)$ can be derived by Bayes' Rule.

#### Step 1: Perfect Information (Baseline)

Under the perfectly revealing signal:
- **Convict bin**: All 3 guilty defendants (posterior $\mu = 1$)
- **Acquit bin**: All 7 innocent defendants (posterior $\mu = 0$)
- **Prosecutor's payoff**: $0.3$ (convicts only the truly guilty)

The judge's posterior for individuals labeled "convict" is that they are guilty with probability $1$, so he optimally convicts. Likewise for those labeled "acquit", the posterior is innocent with probability $1$, so he acquits.

#### Step 2: The Pooling Insight

Now consider **moving one unit of innocent individuals from the acquit bin to the convict bin**:

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
	\def \spacing {0.7}; 
	\def \astart {4.5}; 
  % Legend - positioned above and closer to boxes
  \fill[blue!60] (0.5, 3.2) circle (0.18);
  \node[right] at (0.75, 3.2) {\small INNOCENT};
  \draw[thick, fill=white] (3, 3.2) circle (0.18);
  \node[right] at (3.25, 3.2) {\small GUILTY};

  % CONVICT bin
  \draw[thick] (0, 0) rectangle (3.5, 2.5);
  \node[below] at (1.25, -0.3) {\textbf{CONVICT}};

  % 3 Guilty circles in CONVICT - arranged in triangle
  \fill[blue!60] (1.2, 1.6) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing, 1.6) circle (0.28);
  \draw[thick, fill=white] (1.2, 0.8) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing, 0.8) circle (0.28);

  % ACQUIT bin
  \draw[thick] (4, 0) rectangle (7.5, 2.5);
  \node[below] at (4.75, -0.3) {\textbf{ACQUIT}};

  % 7 Innocent circles in ACQUIT - arranged in rows
  \fill[blue!60] (\astart, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing*2, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing*3, 1.8) circle (0.28);

  \fill[blue!60] (\astart , 0.9) circle (0.28);
  \fill[blue!60] (\astart +\spacing, 0.9) circle (0.28);
  \fill[blue!60] (\astart+\spacing, 0.9) circle (0.28);
  
  \node[below] at (3.75,-1.0) {\textbf{Deviation from perfectly revealing signal}};
\end{tikzpicture}
\end{document}
```

After moving one innocent defendant to the convict bin:
- **Convict bin**: 3 guilty + 1 innocent (posterior $\mu = 3/4 = 0.75 > 0.5$)
- **Acquit bin**: 6 innocent (posterior $\mu = 0$)
- **Prosecutor's payoff**: $0.4$ (now convicts 4 out of 10 defendants)

**Key observation**: The posterior in the acquit bin is unchanged ($\mu = 0$). The posterior in the convict bin drops to $3/4$—but **crucially, the judge's optimal action remains the same** since $0.75 > 0.5$. The prosecutor strictly benefits: payoff increases from $0.3$ to $0.4$!

**Why does this work?** By pooling innocent defendants with guilty defendants (while maintaining a sufficiently high probability of guilt that the judge still wants to convict), the prosecutor induces the judge to wrongly convict more defendants. The judge is acting rationally given the information received, but the information structure has been designed to the prosecutor's advantage.

#### Step 3: Push to the Boundary

We can iterate this logic: keep moving units of innocent individuals into the convict bin, increasing the prosecutor's payoff each time, **until the judge becomes indifferent** between convicting and acquitting ($\mu = 0.5$).

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.0]
	\def \spacing {0.7}; 
	\def \astart {4.5}; 
  % Legend - positioned above and closer to boxes
  \fill[blue!60] (0.5, 3.2) circle (0.18);
  \node[right] at (0.75, 3.2) {\small INNOCENT};
  \draw[thick, fill=white] (3, 3.2) circle (0.18);
  \node[right] at (3.25, 3.2) {\small GUILTY};

  % CONVICT bin
  \draw[thick] (0, 0) rectangle (3.5, 2.5);
  \node[below] at (1.25, -0.3) {\textbf{CONVICT}};

  % 3 Guilty circles in CONVICT - arranged in triangle
  \fill[blue!60] (1.2, 1.6) circle (0.28);
  \fill[blue!60] (1.2+\spacing, 1.6) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing*2, 1.6) circle (0.28);
  \fill[blue!60] (1.2, 0.8) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing, 0.8) circle (0.28);
  \draw[thick, fill=white] (1.2+\spacing*2, 0.8) circle (0.28);

  % ACQUIT bin
  \draw[thick] (4, 0) rectangle (7.5, 2.5);
  \node[below] at (4.75, -0.3) {\textbf{ACQUIT}};

  % 7 Innocent circles in ACQUIT - arranged in rows
  \fill[blue!60] (\astart, 1.8) circle (0.28);
  \fill[blue!60] (\astart + \spacing, 1.8) circle (0.28);


  \fill[blue!60] (\astart , 0.9) circle (0.28);
  \fill[blue!60] (\astart +\spacing, 0.9) circle (0.28);
  
\end{tikzpicture}
\end{document}
```

#### The Optimal Signal Structure

The final configuration shows the optimal signal:
- **Convict bin**: 3 guilty + 3 innocent (posterior $\mu = 3/6 = 0.5$)
- **Acquit bin**: 4 innocent (posterior $\mu = 0$)
- **Prosecutor's payoff**: $0.6$ (convicts 6 out of 10 defendants)

This corresponds to the following signal structure $\sigma: \{G, I\} \to \Delta(S)$:

$$
\begin{matrix}
 & \text{convict} & \text{acquit} \\
G & 1 & 0 \\
I & 3/7 & 4/7
\end{matrix}
$$

**Reading the table**:
- All guilty defendants ($100\%$) receive the "convict" signal
- Innocent defendants are split: $3/7 \approx 43\%$ receive "convict", $4/7 \approx 57\%$ receive "acquit"

### Verification and Intuition

Let's verify this achieves the target payoff of $V(0.3) = 0.6$:

**Computing posteriors using [[Bayes' Plausible|Bayes' Rule]]:**

For the "convict" signal:
$$
\mu_{\text{convict}} = \frac{P(G) \cdot \sigma(\text{convict}|G)}{P(G) \cdot \sigma(\text{convict}|G) + P(I) \cdot \sigma(\text{convict}|I)} = \frac{0.3 \cdot 1}{0.3 \cdot 1 + 0.7 \cdot (3/7)} = \frac{0.3}{0.3 + 0.3} = 0.5
$$

For the "acquit" signal: $\mu_{\text{acquit}} = 0$ (only innocent defendants)

**Computing the prosecutor's expected payoff:**

The probability of sending the "convict" signal is:
$$
P(\text{convict}) = P(G) \cdot 1 + P(I) \cdot (3/7) = 0.3 + 0.7 \cdot (3/7) = 0.3 + 0.3 = 0.6
$$

Since the judge convicts when $\mu = 0.5$ and acquits when $\mu = 0$, the prosecutor's payoff is:
$$
\mathbb{E}[\hat{v}(\mu)] = 0.6 \cdot 1 + 0.4 \cdot 0 = 0.6 = V(0.3)
$$

**The key insight**: The prosecutor achieves payoff $0.6$ by designing a signal that "splits" the prior $\mu_0=0.3$ into exactly two posteriors that lie on the concave envelope:
1.  **"Convict" signal** with posterior $\mu = 0.5$ (judge is just indifferent, convicts by tie-breaking rule)
2.  **"Acquit" signal** with posterior $\mu = 0$ (fully innocent, judge acquits)

These posteriors are weighted by probabilities $(0.6, 0.4)$ which satisfy the [[Bayes' Plausible|Bayes-plausibility constraint]]: $0.6 \cdot 0.5 + 0.4 \cdot 0 = 0.3 = \mu_0$.

**The power of strategic information design**: This signal pools all guilty defendants with just enough innocent defendants to maintain a posterior of exactly $0.5$ in the "convict" bin. Although only $30\%$ of defendants are truly guilty, the prosecutor induces the judge to convict $60\%$ of them—doubling the perfect information benchmark!

## Summary and Key Takeaways

The Prosecutor-Judge game illustrates the fundamental mechanics of [[Bayesian Persuasion]] through a stark, intuitive example:

1. **Information is strategic**: The informed party (prosecutor) can benefit by designing information structures, not just by revealing or concealing information. The optimal strategy often involves partial revelation—neither perfectly informative nor completely uninformative.

2. **The concave envelope is key**: The [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope|upper concave envelope]] $V(\mu)$ of the [[Sender's Indirect Utility Function]] $\hat{v}(\mu)$ characterizes the maximum achievable payoff. Persuasion is valuable whenever $V(\mu_0) > \hat{v}(\mu_0)$—i.e., when the indirect utility function is not already concave.

3. **Optimal signals exploit non-concavities**: When $\hat{v}(\mu)$ is non-concave (like our step function), the sender benefits by "splitting" beliefs—creating a distribution of posteriors rather than a single posterior. This exploits discontinuities or kinks in the receiver's decision rule.

4. **Partial pooling works**: The optimal signal strategically pools types (guilty and innocent defendants) to manipulate the receiver's posterior. By keeping the posterior *just high enough* ($\mu = 0.5$) to induce the desired action, the prosecutor maximizes the probability of conviction.

5. **Connection to general theory**: By [[Value of a Signal (Kamenica-Gentzkow)]], finding the optimal signal reduces to an optimization over [[Bayes' Plausible]] distributions of posteriors (see [[Cor (K-G). Value of Optimal Signal]]). The geometric solution via the concave envelope provides an elegant characterization of the solution.

This example demonstrates why Bayesian Persuasion is so powerful: even when the receiver acts rationally and optimally given the information received, the sender can design the information structure itself to their advantage. The receiver is not being fooled—they update correctly by [[Bayes' Plausible|Bayes' Rule]]—but the *choice of what information to reveal* is itself a strategic decision.