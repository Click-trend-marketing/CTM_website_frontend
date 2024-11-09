module.exports = {
    apps: [
      {
        name: "frontend",
        script: "node",
        args: "-r esm -e 'require(\"serve\").serve(\"build\")'",
        cwd: "./",
        watch: true,
      },
    ],
  };