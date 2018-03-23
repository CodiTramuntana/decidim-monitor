use Mix.Config

# For production, we often load configuration from external
# sources, such as your system environment. For this reason,
# you won't find the :http configuration below, but set inside
# DecidimMonitor.Web.Endpoint.load_from_system_env/1 dynamically.
# Any dynamic configuration should be moved to such function.
#
# Don't forget to configure the url host to something meaningful,
# Phoenix uses this information when generating URLs.
#
# Finally, we also include the path to a cache manifest
# containing the digested version of static files. This
# manifest is generated by the mix phoenix.digest task
# which you typically run after static files are built.
config :decidim_monitor, DecidimMonitor.Web.Endpoint,
  load_from_system_env: true,
  check_origin: false,
  force_ssl: if(System.get_env("FORCE_SSL"), do: [rewrite_on: [:x_forwarded_proto]], else: nil),
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  cache_static_manifest: "priv/static/cache_manifest.json"

# Do not print debug messages in production
config :logger, level: :info
