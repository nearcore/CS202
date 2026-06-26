const storagePrefix = "cs202-combined-review:";

const exerciseGroups = {
  pokemonGuided: [
    {
      id: "pokemon-parent",
      label: "Pokemon 1",
      title: "Build Pokemon.java",
      instructions: [
        "Create an abstract Pokemon parent class.",
        "Add private final fields for hitPoints, bounds, name, and type.",
        "Write a protected constructor and assign fields with this.name.",
        "Add moveTo, dragBy, draw, speak, contains, and abstract getGreeting.",
      ],
      starter: `import javax.swing.*;
import java.awt.*;

public abstract class Pokemon {
    // fields

    protected Pokemon(String name, int hitPoints, int type, String pictureFileName) {
        // setup
    }
}`,
      checks: [
        "public abstract class Pokemon",
        "private final int hitPoints",
        "private final Rectangle bounds",
        "protected Pokemon(",
        "this.name = name",
        "moveTo(int x, int y)",
        "dragBy(int deltaX, int deltaY)",
        "draw(Graphics g)",
        "speak()",
        "contains(int x, int y)",
        "protected abstract String getGreeting()",
      ],
    },
    {
      id: "pokemon-child",
      label: "Pokemon 2",
      title: "Build Charmander.java",
      instructions: [
        "Create Charmander as a child of Pokemon.",
        "Write a constructor with String name.",
        "Call super(name, 39, FIRE, \"charmander.png\").",
        "Override getGreeting.",
      ],
      starter: `public class Charmander extends Pokemon {

    public Charmander(String name) {
    }

    @Override
    protected String getGreeting() {
    }
}`,
      checks: [
        "class Charmander extends Pokemon",
        "public Charmander(String name)",
        "super(name, 39, FIRE, \"charmander.png\")",
        "@Override",
        "protected String getGreeting()",
      ],
    },
    {
      id: "pokemon-panel",
      label: "Pokemon 3",
      title: "Build PokeFun Drawing And Dragging",
      instructions: [
        "Extend JPanel and implement MouseListener plus MouseMotionListener.",
        "Use List<Pokemon> to store different Pokemon child objects.",
        "Draw every Pokemon inside paintComponent.",
        "Use mousePressed and mouseDragged to select and move a Pokemon.",
      ],
      starter: `public class PokeFun extends JPanel implements MouseListener, MouseMotionListener {
    private final List<Pokemon> pokemonTeam;

    @Override
    public void paintComponent(Graphics g) {
    }

    @Override
    public void mouseDragged(MouseEvent event) {
    }
}`,
      checks: [
        "extends JPanel",
        "implements MouseListener, MouseMotionListener",
        "List<Pokemon>",
        "paintComponent(Graphics g)",
        "super.paintComponent(g)",
        "for (Pokemon pokemon : pokemonTeam)",
        "pokemon.draw(g)",
        "mouseDragged(MouseEvent event)",
        "selectedPokemon.dragBy",
        "repaint()",
      ],
    },
  ],
  pokemonPractice: [
    {
      id: "pokemon-no-hints-parent",
      label: "No Hints",
      title: "Pokemon Parent From Memory",
      prompt: "Write the important structure of Pokemon.java from memory.",
      starter: "",
      checks: [
        "abstract class Pokemon",
        "private final",
        "Rectangle",
        "ImageIcon",
        "protected Pokemon(",
        "draw(Graphics g)",
        "contains(int x, int y)",
        "abstract String getGreeting",
      ],
    },
    {
      id: "pokemon-no-hints-this",
      label: "No Hints",
      title: "Pichu Constructor Chain",
      prompt: "Write the Pichu constructors using this(...) and super(...).",
      starter: "",
      checks: [
        "class Pichu extends Pokemon",
        "this(name, 20)",
        "this(\"Pichu\")",
        "super(name, hitPoints, ELECTRIC, \"pichu.png\")",
      ],
    },
  ],
  foodGuided: [
    {
      id: "food-parent",
      label: "Food 1",
      title: "Build Food.java",
      instructions: [
        "Start with package foodmenu.",
        "Create an abstract Food parent class.",
        "Add private final fields for name, category, price, and bounds.",
        "Write a protected constructor and assign fields with this.",
        "Add moveTo, contains, draw, getOrderLine, getDescription, and getAccentColor.",
      ],
      starter: `package foodmenu;

import javax.swing.*;
import java.awt.*;

public abstract class Food {
    // fields

    protected Food(String name, String category, double price, String imageFileName) {
        // setup
    }
}`,
      checks: [
        "package foodmenu;",
        "public abstract class Food",
        "private final String name",
        "private final String category",
        "private final double price",
        "private final Rectangle bounds",
        "protected Food(",
        "this.name = name",
        "moveTo(int x, int y)",
        "contains(int x, int y)",
        "draw(Graphics g)",
        "getOrderLine()",
        "abstract String getDescription()",
        "abstract Color getAccentColor()",
      ],
    },
    {
      id: "food-child",
      label: "Food 2",
      title: "Build Adobo.java",
      instructions: [
        "Start with package foodmenu.",
        "Create Adobo as a child of Food.",
        "Call super with name, category, price, and image filename.",
        "Override getDescription and getAccentColor.",
      ],
      starter: `package foodmenu;

import java.awt.*;

public class Adobo extends Food {

    public Adobo() {
    }

    @Override
    public String getDescription() {
    }

    @Override
    protected Color getAccentColor() {
    }
}`,
      checks: [
        "package foodmenu;",
        "class Adobo extends Food",
        "public Adobo()",
        "super(\"Adobo\", \"Main Dish\", 9.00, \"adobo.png\")",
        "@Override",
        "public String getDescription()",
        "protected Color getAccentColor()",
      ],
    },
    {
      id: "food-app",
      label: "Food 3",
      title: "Build FoodMenuApp Click Selection",
      instructions: [
        "Extend JPanel and implement MouseListener.",
        "Use List<Food> to store every food child object.",
        "Draw every Food inside paintComponent.",
        "Use mouseClicked to select the clicked item and call repaint.",
      ],
      starter: `public class FoodMenuApp extends JPanel implements MouseListener {
    private final List<Food> menuItems;

    @Override
    public void paintComponent(Graphics g) {
    }

    @Override
    public void mouseClicked(MouseEvent event) {
    }
}`,
      checks: [
        "extends JPanel",
        "implements MouseListener",
        "List<Food>",
        "paintComponent(Graphics g)",
        "super.paintComponent(g)",
        "for (Food food : menuItems)",
        "food.draw(g)",
        "mouseClicked(MouseEvent event)",
        "food.contains",
        "repaint()",
      ],
    },
  ],
  foodPractice: [
    {
      id: "food-no-hints-parent",
      label: "No Hints",
      title: "Food Parent From Memory",
      prompt: "Write the important structure of Food.java from memory.",
      starter: "",
      checks: [
        "package foodmenu;",
        "abstract class Food",
        "private final",
        "Rectangle",
        "protected Food(",
        "draw(Graphics g)",
        "contains(int x, int y)",
        "abstract String getDescription",
      ],
    },
    {
      id: "food-no-hints-app",
      label: "No Hints",
      title: "FoodMenuApp From Memory",
      prompt: "Write FoodMenuApp with List<Food>, paintComponent, main, and mouseClicked.",
      starter: "",
      checks: [
        "class FoodMenuApp extends JPanel implements MouseListener",
        "List<Food>",
        "new ArrayList<>()",
        "paintComponent(Graphics g)",
        "public static void main(String[] args)",
        "mouseClicked(MouseEvent event)",
        "food.contains",
        "repaint()",
      ],
    },
  ],
  mixedPractice: [
    {
      id: "mixed-parent-compare",
      label: "Compare",
      title: "Compare Both Parent Classes",
      prompt: "Write short code snippets or notes showing how Pokemon and Food are both abstract parent classes.",
      starter: "",
      checks: [
        "abstract class Pokemon",
        "abstract class Food",
        "extends",
        "super",
        "@Override",
      ],
    },
    {
      id: "mixed-lists",
      label: "Compare",
      title: "Compare The Polymorphic Lists",
      prompt: "Write the two list declarations and one for-each loop for each project.",
      starter: "",
      checks: [
        "List<Pokemon>",
        "for (Pokemon pokemon : pokemonTeam)",
        "List<Food>",
        "for (Food food : menuItems)",
      ],
    },
    {
      id: "mixed-events",
      label: "Compare",
      title: "Compare Mouse Event Flow",
      prompt: "Write or explain how Pokemon dragging differs from FoodMenu clicking.",
      starter: "",
      checks: [
        "mousePressed",
        "mouseDragged",
        "mouseClicked",
        "contains",
        "repaint()",
      ],
    },
  ],
};

function createExercise(exercise) {
  const saved = localStorage.getItem(storagePrefix + exercise.id);
  const startingCode = saved ?? exercise.starter;
  const instructions = exercise.instructions
    ? `<ol>${exercise.instructions.map((item) => `<li>${item}</li>`).join("")}</ol>`
    : `<p>${exercise.prompt}</p>`;

  return `
    <article class="exercise" data-exercise="${exercise.id}">
      <div class="exercise-header">
        <h3>${exercise.title}</h3>
        <span class="badge">${exercise.label}</span>
      </div>
      <div class="exercise-body">
        <div class="instructions">${instructions}</div>
        <div>
          <textarea class="code-box" spellcheck="false">${escapeHtml(startingCode)}</textarea>
          <div class="exercise-actions">
            <button type="button" class="action-button primary" data-action="check">Check Key Syntax</button>
            <button type="button" class="action-button" data-action="copy">Copy My Code</button>
            <button type="button" class="action-button warning" data-action="reset">Reset Box</button>
          </div>
          <div class="feedback" aria-live="polite">Type your answer, then check it.</div>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalize(value) {
  return value.replace(/\s+/g, "");
}

function findExercise(id) {
  return Object.values(exerciseGroups)
    .flat()
    .find((exercise) => exercise.id === id);
}

function checkExercise(article) {
  const exercise = findExercise(article.dataset.exercise);
  const code = normalize(article.querySelector(".code-box").value);
  const missing = exercise.checks.filter((check) => !code.includes(normalize(check)));
  const feedback = article.querySelector(".feedback");

  if (missing.length === 0) {
    feedback.className = "feedback pass";
    feedback.textContent = "Good. The key syntax pieces are present. Paste it into Codex or ChatGPT if you want a deeper compile-style check.";
    return;
  }

  feedback.className = "feedback fail";
  feedback.innerHTML = `Still missing: ${missing.map((item) => `<code>${escapeHtml(item)}</code>`).join(" ")}`;
}

function copyText(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).catch(() => copyTextWithFallback(text));
  }

  return copyTextWithFallback(text);
}

function copyTextWithFallback(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  document.body.append(helper);
  helper.select();
  document.execCommand("copy");
  helper.remove();
  return Promise.resolve();
}

function setupTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");
      document.getElementById(button.dataset.tab).classList.add("is-active");
    });
  });
}

function setupExercises() {
  Object.entries(exerciseGroups).forEach(([containerId, exercises]) => {
    document.getElementById(containerId).innerHTML = exercises.map(createExercise).join("");
  });

  document.querySelectorAll(".exercise").forEach((article) => {
    const exercise = findExercise(article.dataset.exercise);
    const textarea = article.querySelector(".code-box");

    textarea.addEventListener("input", () => {
      localStorage.setItem(storagePrefix + exercise.id, textarea.value);
    });

    article.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;

      if (button.dataset.action === "check") {
        checkExercise(article);
      }

      if (button.dataset.action === "copy") {
        copyText(textarea.value);
        article.querySelector(".feedback").textContent = "Copied. Paste it into Codex or ChatGPT for a full review.";
      }

      if (button.dataset.action === "reset") {
        textarea.value = exercise.starter;
        localStorage.setItem(storagePrefix + exercise.id, textarea.value);
        article.querySelector(".feedback").className = "feedback";
        article.querySelector(".feedback").textContent = "Reset to the starter version.";
      }
    });
  });
}

function setupPromptCopy() {
  document.getElementById("copyPrompt").addEventListener("click", () => {
    copyText(document.getElementById("reviewPrompt").value);
  });
}

setupTabs();
setupExercises();
setupPromptCopy();
